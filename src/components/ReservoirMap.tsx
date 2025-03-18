
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { reservoirData } from '@/utils/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map } from 'lucide-react';

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
const CYPRUS_CENTER = { lng: 33.00, lat: 35.00 };

const ReservoirMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapboxApiKey, setMapboxApiKey] = useState<string>('');
  
  useEffect(() => {
    // Only initialize the map once we have an API key
    if (!mapboxApiKey || !mapContainer.current) return;
    
    mapboxgl.accessToken = mapboxApiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [CYPRUS_CENTER.lng, CYPRUS_CENTER.lat],
      zoom: 9,
    });

    map.current.on('load', () => {
      setMapLoaded(true);
      
      if (!map.current) return;
      
      // Add reservoirs as markers
      reservoirData.forEach(reservoir => {
        const location = reservoirLocations[reservoir.name as keyof typeof reservoirLocations];
        if (!location) return;
        
        const percentage = reservoir.storage.current.percentage;
        const color = getColorByPercentage(percentage);
        const size = Math.max(20, Math.min(50, percentage / 2));
        
        // Create a custom marker element
        const el = document.createElement('div');
        el.className = 'reservoir-marker';
        el.style.backgroundColor = color;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.3)';
        el.style.cursor = 'pointer';
        
        // Add popup with reservoir info
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="padding: 8px;">
              <h3 style="margin: 0; font-weight: 600;">${reservoir.name}</h3>
              <p style="margin: 0;">Region: ${reservoir.region}</p>
              <p style="margin: 0;">Capacity: ${reservoir.capacity.toFixed(1)} MCM</p>
              <p style="margin: 0;">Current: ${reservoir.storage.current.amount.toFixed(1)} MCM (${reservoir.storage.current.percentage.toFixed(1)}%)</p>
              <p style="margin: 0;">Last Year: ${reservoir.storage.lastYear.amount.toFixed(1)} MCM (${reservoir.storage.lastYear.percentage.toFixed(1)}%)</p>
              <p style="margin: 0;">Recent Inflow: ${reservoir.inflow.last24Hours.toFixed(3)} MCM</p>
            </div>
          `);
        
        // Add marker to map
        new mapboxgl.Marker(el)
          .setLngLat([location.lng, location.lat])
          .setPopup(popup)
          .addTo(map.current);
      });
      
      // Add map controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');
    });
    
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxApiKey]);
  
  // Function to get color based on percentage
  const getColorByPercentage = (percentage: number): string => {
    if (percentage < 25) return '#ef4444'; // red
    if (percentage < 50) return '#f97316'; // orange
    if (percentage < 75) return '#facc15'; // yellow
    return '#22c55e'; // green
  };
  
  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapboxApiKey(e.target.value);
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
        {!mapboxApiKey ? (
          <div className="flex flex-col items-center justify-center space-y-4 p-8">
            <p className="text-center text-gray-600">
              To view the reservoir map, please enter your Mapbox API key below.
              You can get a free API key by signing up at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>.
            </p>
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Enter your Mapbox API key"
                value={mapboxApiKey}
                onChange={handleApiKeyChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-[500px] rounded-md overflow-hidden relative">
            <div ref={mapContainer} className="absolute inset-0" />
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <p>Loading map...</p>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> This map shows all reservoirs in Cyprus. The size and color of each circle represents 
            the current storage level. Click on a reservoir to see detailed information.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservoirMap;
