
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';


import { reservoirData } from '@/utils/data';
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
  'Kouris': { lng: 32.9309, lat: 34.7355 },
  'Asprokremmos': { lng: 32.5414, lat: 34.7431 },
  'Evretou': { lng: 32.5125, lat: 34.9730 },
  'Kannaviou': { lng: 32.5981, lat: 34.9174 },
  'Arminou': { lng: 32.7509, lat: 34.8746 },
  'Kalavasos': { lng: 33.3022, lat: 34.7719 },
  'Dipotamos': { lng: 33.3156, lat: 34.7853 },
  'Germasogeia': { lng: 33.1022, lat: 34.7575 },
  'Polemidia': { lng: 33.0211, lat: 34.7205 },
  'Achna': { lng: 33.7752, lat: 35.0410 },
  'Lefkara': { lng: 33.3111, lat: 34.8840 },
  'Tamassos': { lng: 33.2060, lat: 35.0084 },
  'Klirou-Malounta': { lng: 33.1524, lat: 35.0368 },
  'Palekhori': { lng: 33.1115, lat: 34.9512 },
  'Solea': { lng: 32.9515, lat: 35.0100 },
  'Kalopanagiotis': { lng: 32.8831, lat: 34.9725 },
  'Xyliatos': { lng: 33.0422, lat: 35.0110 },
  'Vyzakia': { lng: 33.0281, lat: 35.0342 },
  'Argaka': { lng: 32.3662, lat: 35.0400 },
  'Pomos': { lng: 32.5690, lat: 35.1702 },
  'Agia Marina': { lng: 32.4545, lat: 35.0522 },
  'Mavrokolymbos': { lng: 32.4010, lat: 34.8694 },
};

// Default coordinates for Cyprus center
const CYPRUS_CENTER: LatLngExpression = [35.00, 33.00];

const ReservoirMap: React.FC = () => {
  
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
    const maxCapacity = Math.max(...reservoirData.map(r => r.capacity));
    
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
    <Card className="bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 p-1">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Map className="h-5 w-5 text-water-500" />
          <span>Cyprus Reservoir Map</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="w-full h-[500px] rounded-md overflow-hidden">
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
            
            {reservoirData.map(reservoir => {
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
                      <p style={{ margin: '0' }}>Region: {reservoir.region}</p>
                      <p style={{ margin: '0' }}>Capacity: {reservoir.capacity.toFixed(1)} MCM</p>
                      <p style={{ margin: '0' }}>
                        Current: {reservoir.storage.current.amount.toFixed(1)} MCM ({reservoir.storage.current.percentage.toFixed(1)}%)
                      </p>
                      <p style={{ margin: '0' }}>
                        Last Year: {reservoir.storage.lastYear.amount.toFixed(1)} MCM ({reservoir.storage.lastYear.percentage.toFixed(1)}%)
                      </p>
                      <p style={{ margin: '0' }}>Recent Inflow: {reservoir.inflow.last24Hours.toFixed(3)} MCM</p>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> This map shows all reservoirs in Cyprus. The size of each circle represents 
            the reservoir's total capacity, while the color indicates the current storage level (red: &lt;25%, orange: 25-50%, 
            yellow: 50-75%, green: &gt;75%). Click on a reservoir to see detailed information.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservoirMap;
