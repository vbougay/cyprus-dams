import React, { useState } from 'react';
import { Reservoir } from '@/types';
import { getReservoirsWithDrainDates } from '@/utils/dataManager';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation, translations } from '@/utils/translations';
import { ChevronDown, ChevronUp, Filter, Search, Timer } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Column {
  key: keyof Reservoir | 'difference';
  label: string;
  render: (reservoir: Reservoir) => React.ReactNode;
  sortable?: boolean;
}

const ReservoirTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const reservoirData = getReservoirsWithDrainDates();
  
  // Define the columns for the table
  const columns: Column[] = [
    {
      key: 'name',
      label: t('reservoir'),
      render: (reservoir) => {
        // Get translations for reservoir name and region
        // We need to check if the translations object has entries for these
        const translatedName = (() => {
          // Check if the name exists in translations
          if (reservoir.name in translations[language]) {
            // @ts-expect-error - We know this is a valid key at runtime
            return t(reservoir.name);
          }
          return reservoir.name;
        })();
        
        // Get translation for region
        const translatedRegion = (() => {
          // Check if the region exists in translations
          if (reservoir.region in translations[language]) {
            // @ts-expect-error - We know this is a valid key at runtime
            return t(reservoir.region);
          }
          return reservoir.region;
        })();
        
        return (
          <div>
            <span className="font-medium">{translatedName}</span>
            <div className="text-xs text-gray-500">{translatedRegion}</div>
          </div>
        );
      },
      sortable: true,
    },
    {
      key: 'capacity',
      label: t('capacityMCM'),
      render: (reservoir) => <span>{reservoir.capacity.toFixed(3)}</span>,
      sortable: true,
    },
    {
      key: 'storage',
      label: t('currentStorageShort'),
      render: (reservoir) => (
        <div>
          <div className="font-medium">{reservoir.storage.current.amount.toFixed(3)} MCM</div>
          <div className="text-xs text-gray-500">{reservoir.storage.current.percentage}%</div>
        </div>
      ),
      sortable: true,
    },
    {
      key: 'storage',
      label: t('lastYearShort'),
      render: (reservoir) => (
        <div>
          <div className="font-medium">{reservoir.storage.lastYear.amount.toFixed(3)} MCM</div>
          <div className="text-xs text-gray-500">{reservoir.storage.lastYear.percentage}%</div>
        </div>
      ),
      sortable: true,
    },
    {
      key: 'difference',
      label: t('changeShort'),
      render: (reservoir) => {
        const diff = reservoir.storage.current.percentage - reservoir.storage.lastYear.percentage;
        const isPositive = diff >= 0;
        return (
          <div className={`flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="font-medium">{Math.abs(diff).toFixed(1)}%</span>
          </div>
        );
      },
      sortable: true,
    },
    {
      key: 'inflow',
      label: t('recentInflowShort'),
      render: (reservoir) => <span>{reservoir.inflow.last24Hours.toFixed(3)} MCM</span>,
      sortable: true,
    },
    {
      key: 'inflow',
      label: t('totalInflow'),
      render: (reservoir) => <span>{reservoir.inflow.totalSince.toFixed(3)} MCM</span>,
      sortable: true,
    },
    {
      key: 'drainDate',
      label: t('fullyDrainedByShort'),
      render: (reservoir) => {
        const drainDate = reservoir.drainDate || t('calculating');
        return (
          <div className="flex items-center gap-1">
            <Timer className="h-4 w-4 text-water-500" />
            <span className={`
              ${drainDate === 'Already Empty' ? 'text-red-500' : ''}
              ${drainDate === 'Not Draining' ? 'text-green-500' : ''}
              ${drainDate === 'Beyond 10 Years' ? 'text-green-500' : ''}
              ${!['Already Empty', 'Not Draining', 'Beyond 10 Years', 'Calculating...'].includes(drainDate) ? 'text-amber-500' : ''}
            `}>
              {drainDate === 'Already Empty' ? t('alreadyEmpty') :
               drainDate === 'Not Draining' ? t('notDraining') :
               drainDate === 'Beyond 10 Years' ? t('beyondTenYears') :
               drainDate === 'Calculating...' ? t('calculating') : drainDate}
            </span>
          </div>
        );
      },
      sortable: true,
    },
  ];
  
  // Filter and sort the reservoirs
  const filteredReservoirs = reservoirData.filter((reservoir) => {
    // Filter by search term
    const matchesSearch = reservoir.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by region
    const matchesRegion = selectedRegion === 'all' || reservoir.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });
  
  // Sorting function
  const sortedReservoirs = [...filteredReservoirs].sort((a, b) => {
    // Handle custom sort field 'difference'
    if (sortField === 'difference') {
      const diffA = a.storage.current.percentage - a.storage.lastYear.percentage;
      const diffB = b.storage.current.percentage - b.storage.lastYear.percentage;
      return sortDirection === 'asc' ? diffA - diffB : diffB - diffA;
    }
    
    // Handle storage and inflow fields
    if (sortField === 'storage') {
      const valueA = a.storage.current.amount;
      const valueB = b.storage.current.amount;
      return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
    }
    
    if (sortField === 'inflow') {
      const valueA = a.inflow.totalSince;
      const valueB = b.inflow.totalSince;
      return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
    }
    
    // Handle other fields
    const valueA = a[sortField as keyof Reservoir];
    const valueB = b[sortField as keyof Reservoir];
    
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortDirection === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
    }
    
    return 0;
  });
  
  // Handle sort changes
  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Get unique regions for the filter
  const regions = ['all', ...new Set(reservoirData.map((r) => r.region))];
  
  return (
    <Card className="bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between flex-wrap gap-4">
          <span>{t('dataTable')}</span>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder={t('searchReservoirs')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 h-9 md:w-48 bg-white"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="h-4 w-4 mr-2" />
                  {t('filter')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>{t('filterByRegion')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {regions.map((region) => (
                  <DropdownMenuItem
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={selectedRegion === region ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {region === 'all' ? t('allRegions') : (() => {
                      // Try to get translation for region
                      if (region in translations[language]) {
                        // @ts-expect-error - We know this is a valid key at runtime
                        return t(region);
                      }
                      return region;
                    })()}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-t bg-gray-50">
              {columns.map((column) => (
                <th key={`${column.key}-${column.label}`} className="p-3 text-left text-sm font-medium text-gray-600">
                  {column.sortable ? (
                    <button
                      onClick={() => handleSort(column.key.toString())}
                      className="flex items-center gap-1 hover:text-gray-900"
                    >
                      {column.label}
                      {sortField === column.key && (
                        sortDirection === 'asc' ? 
                          <ChevronUp className="h-3 w-3" /> : 
                          <ChevronDown className="h-3 w-3" />
                      )}
                    </button>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedReservoirs.map((reservoir) => (
              <tr 
                key={reservoir.name} 
                className="border-b hover:bg-gray-50 transition-colors"
              >
                {columns.map((column) => (
                  <td key={`${reservoir.name}-${column.key}-${column.label}`} className="p-3 text-sm">
                    {column.render(reservoir)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        {sortedReservoirs.length === 0 && (
          <div className="flex items-center justify-center h-32 text-gray-500">
            {t('noReservoirs')}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReservoirTable;
