
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

import { reservoirData } from '@/utils/dataManager';
import { useDataContext } from '@/context/DataContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/utils/translations';
import { Reservoir } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map } from 'lucide-react';

// Fix Leaflet's default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Add coordinates for the Cyprus reservoirs
const reservoirLocations = {
  'Kouris': { lng: 32.9178, lat: 34.7278 },
  'Asprokremmos': { lng: 32.5543, lat: 34.7259 },
  'Evretou': { lng: 32.4727, lat: 34.9757 },
  'Kannaviou': { lng: 32.5878, lat: 34.9277 },
  'Arminou': { lng: 32.7371, lat: 34.8752 },
  'Kalavasos': { lng: 33.260517, lat: 34.803972 },
  'Dipotamos': { lng: 33.359274, lat: 34.851618 },
  'Germasoyeia': { lng: 33.0843, lat: 34.7439 },
  'Polemidia': { lng: 32.9888, lat: 34.7187 },
  'Achna': { lng: 33.814307, lat: 35.055321 },
  'Lefkara': { lng: 33.2956, lat: 34.8944 },
  'Tamassos': { lng: 33.2479, lat: 35.0167 },
  'Klirou-Malounta': { lng: 33.1727, lat: 35.0318 },
  'Palekhori': { lng: 33.1100, lat: 34.9500 }, // Retained due to lack of precise data
  'Solea': { lng: 32.9029, lat: 35.0668 },
  'Kalopanagiotis': { lng: 32.8254, lat: 35.0061 },
  'Xyliatos': { lng: 33.0372, lat: 35.0089 },
  'Vyzakia': { lng: 33.0272, lat: 35.0615 },
  'Argaka': { lng: 32.5022, lat: 35.0486 },
  'Pomos': { lng: 32.5762, lat: 35.1449 },
  'Agia Marina': { lng: 32.5410, lat: 35.1170 },
  'Mavrokolympos': { lng: 32.4058, lat: 34.8565 },
};

// Default coordinates for Cyprus center
const CYPRUS_CENTER: LatLngExpression = [35.00, 33.00];

const ReservoirMap: React.FC = () => {
  const { currentDataSetId } = useDataContext();
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  // Function to get color based on percentage
  const getColorByPercentage = (percentage: number): string => {
    if (percentage < 25) return '#ef4444'; // red
    if (percentage < 50) return '#f97316'; // orange
    if (percentage < 75) return '#facc15'; // yellow
    return '#22c55e'; // green
  };

  // Function to create a custom marker icon
  const createCustomMarkerIcon = (reservoir: Reservoir) => {
    const percentage = reservoir.storage.current.percentage;
    const capacity = reservoir.capacity;
    
    // Color based on percentage
    const color = getColorByPercentage(percentage);
    
    // Size based on capacity (with logarithmic scaling)
    const minSize = 15; // Minimum bubble size in pixels
    const maxSize = 60; // Maximum bubble size in pixels
    
    // Find the largest reservoir capacity for scaling
    const maxCapacity = Math.max(...reservoirData(currentDataSetId).map(r => r.capacity));
    
    // Scale logarithmically to handle wide range of reservoir sizes
    const size = minSize + (Math.log(capacity + 1) / Math.log(maxCapacity + 1)) * (maxSize - minSize);
    
    return L.divIcon({
      className: 'reservoir-marker',
      html: `<div style="
        background-color: ${color}; 
        width: ${size}px; 
        height: ${size}px; 
        border-radius: 50%; 
        border: 2px solid white; 
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      "></div>`,
      iconSize: [size, size],
      iconAnchor: [size/2, size/2]
    });
  };

  return (
    <Card className="glass-card rounded-2xl p-1">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Map className="h-5 w-5 text-water-500 dark:text-water-400" />
          <span>{t('mapTitle')}</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="w-full h-[500px] rounded-lg overflow-hidden">
          <MapContainer
            center={CYPRUS_CENTER}
            zoom={9}
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="topright" />

            {reservoirData(currentDataSetId).map(reservoir => {
              const location = reservoirLocations[reservoir.name as keyof typeof reservoirLocations];
              if (!location) return null;

              const position: LatLngExpression = [location.lat, location.lng];

              return (
                <Marker
                  key={reservoir.name}
                  position={position}
                  icon={createCustomMarkerIcon(reservoir)}
                >
                  <Popup>
                    <div style={{ padding: '4px' }}>
                      <h3 style={{ margin: '0', fontWeight: 600 }}>{reservoir.name}</h3>
                      <p style={{ margin: '0' }}>{t('mapRegion')}: {reservoir.region}</p>
                      <p style={{ margin: '0' }}>{t('mapCapacity')}: {reservoir.capacity.toFixed(1)} MCM</p>
                      <p style={{ margin: '0' }}>
                        {t('mapCurrent')}: {reservoir.storage.current.amount.toFixed(1)} MCM ({reservoir.storage.current.percentage.toFixed(1)}%)
                      </p>
                      <p style={{ margin: '0' }}>
                        {t('mapLastYear')}: {reservoir.storage.lastYear.amount.toFixed(1)} MCM ({reservoir.storage.lastYear.percentage.toFixed(1)}%)
                      </p>
                      <p style={{ margin: '0' }}>{t('mapRecentInflow')}: {reservoir.inflow.last24Hours.toFixed(3)} MCM</p>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        <div className="mt-4 p-3 bg-water-50 dark:bg-water-900/30 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">{t('mapNoteLabel')}:</strong> {t('mapNote')}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservoirMap;
