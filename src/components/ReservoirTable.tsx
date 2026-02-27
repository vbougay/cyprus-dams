import React, { useState, useMemo } from 'react';
import { Reservoir } from '@/types';
import { getReservoirsWithDrainDates } from '@/utils/dataManager';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation, translations } from '@/utils/translations';
import { ChevronDown, ChevronUp, Filter, Search, Timer } from 'lucide-react';
import StorageSparkline from '@/components/StorageSparkline';
import { getAllSparklineData } from '@/utils/sparklineData';
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

const regionKeyMap: Record<string, string> = {
  'Southern Conveyor': 'southernConveyor',
  'Paphos': 'paphos',
  'Chrysochou': 'chrysochou',
  'Nicosia': 'nicosia',
  'Recharge/Other': 'rechargeOther',
  'Total': 'total',
};

const ReservoirTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const reservoirData = getReservoirsWithDrainDates(currentDataSetId);
  const sparklineMap = useMemo(() => getAllSparklineData(reservoirData), [reservoirData]);

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
        const regionKey = regionKeyMap[reservoir.region];
        const translatedRegion = regionKey ? t(regionKey as Parameters<typeof t>[0]) : reservoir.region;
        
        return (
          <div>
            <span className="font-medium">{translatedName}</span>
            <div className="text-xs text-muted-foreground">{translatedRegion}</div>
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
          <div className="text-xs text-muted-foreground">{reservoir.storage.current.percentage.toFixed(1)}%</div>
        </div>
      ),
      sortable: true,
    },
    {
      key: 'storage',
      label: t('trend12m'),
      render: (reservoir) => {
        const data = sparklineMap.get(reservoir.name);
        if (!data || data.length === 0) return <span className="text-muted-foreground">-</span>;
        return (
          <div className="w-[80px] h-[24px]">
            <StorageSparkline data={data} />
          </div>
        );
      },
      sortable: false,
    },
    {
      key: 'storage',
      label: t('lastYearShort'),
      render: (reservoir) => (
        <div>
          <div className="font-medium">{reservoir.storage.lastYear.amount.toFixed(3)} MCM</div>
          <div className="text-xs text-muted-foreground">{reservoir.storage.lastYear.percentage.toFixed(1)}%</div>
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
          <div className={`flex items-center gap-1 ${isPositive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
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
      label: t('restrictionsBy'),
      render: (reservoir) => {
        const drainDate = reservoir.drainDate || t('calculating');
        return (
          <div className="flex items-center gap-1">
            <Timer className="h-4 w-4 text-water-500 dark:text-water-400" />
            <span className={`
              ${drainDate === 'Already Empty' || drainDate === 'Already Restricted' ? 'text-red-500 dark:text-red-400' : ''}
              ${drainDate === 'Not Draining' || drainDate === 'Not Restricted' ? 'text-green-500 dark:text-green-400' : ''}
              ${drainDate === 'Beyond 10 Years' ? 'text-green-500 dark:text-green-400' : ''}
              ${!['Already Empty', 'Already Restricted', 'Not Draining', 'Not Restricted', 'Beyond 10 Years', 'Calculating...'].includes(drainDate) ? 'text-amber-500 dark:text-amber-400' : ''}
            `}>
              {drainDate === 'Already Empty' || drainDate === 'Already Restricted' ? t('alreadyRestricted') :
               drainDate === 'Not Draining' || drainDate === 'Not Restricted' ? t('notRestricted') :
               drainDate === 'Beyond 10 Years' ? t('notRestricted') :
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
  
  // Convert a drainDate string to a sortable numeric value.
  // "Already Empty" = 0, actual dates = timestamp, "Beyond 10 Years" and "Not Draining" = far future.
  const drainDateToSortValue = (drainDate: string | undefined): number => {
    if (!drainDate || drainDate === 'Calculating...') return Infinity;
    if (drainDate === 'Already Empty' || drainDate === 'Already Restricted') return 0;
    if (drainDate === 'Not Draining' || drainDate === 'Not Restricted') return Infinity - 1;
    if (drainDate === 'Beyond 10 Years') return Infinity - 2;
    // Parse "M/YYYY" format
    const parts = drainDate.split('/');
    if (parts.length === 2) {
      const month = parseInt(parts[0], 10);
      const year = parseInt(parts[1], 10);
      if (!isNaN(month) && !isNaN(year)) {
        return year * 12 + month;
      }
    }
    return Infinity;
  };

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

    // Handle drainDate field with chronological sorting
    if (sortField === 'drainDate') {
      const valueA = drainDateToSortValue(a.drainDate);
      const valueB = drainDateToSortValue(b.drainDate);
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
    <Card className="glass-card rounded-2xl animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between flex-wrap gap-4">
          <span>{t('dataTable')}</span>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t('searchReservoirs')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 h-9 md:w-48 bg-white/50 dark:bg-gray-800/50"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 bg-white/50 dark:bg-gray-800/50">
                  <Filter className="h-4 w-4 mr-2" />
                  {t('filter')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 backdrop-blur-md bg-white/90 dark:bg-gray-900/90">
                <DropdownMenuLabel>{t('filterByRegion')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {regions.map((region) => (
                  <DropdownMenuItem
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={selectedRegion === region ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {region === 'all' ? t('allRegions') : (() => {
                      const key = regionKeyMap[region];
                      return key ? t(key as Parameters<typeof t>[0]) : region;
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
            <tr className="border-b border-t border-border bg-muted/50">
              {columns.map((column) => (
                <th key={`${column.key}-${column.label}`} className="p-3 text-left text-sm font-medium text-muted-foreground">
                  {column.sortable ? (
                    <button
                      onClick={() => handleSort(column.key.toString())}
                      className="flex items-center gap-1 hover:text-foreground transition-colors"
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
                className="border-b border-border hover:bg-muted/50 transition-colors"
              >
                {columns.map((column) => (
                  <td key={`${reservoir.name}-${column.key}-${column.label}`} className="p-3 text-sm text-foreground">
                    {column.render(reservoir)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {sortedReservoirs.length === 0 && (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            {t('noReservoirs')}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReservoirTable;
