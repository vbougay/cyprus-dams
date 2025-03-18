import { LatLngExpression, Icon, DivIcon } from 'leaflet';
import { ComponentProps } from 'react';

declare module 'react-leaflet' {
  export interface MapContainerProps extends ComponentProps<'div'> {
    center: LatLngExpression;
    zoom: number;
    zoomControl?: boolean;
    style?: React.CSSProperties;
  }

  export interface TileLayerProps {
    attribution: string;
    url: string;
  }

  export interface MarkerProps {
    position: LatLngExpression;
    icon?: Icon | DivIcon;
  }

  export interface ZoomControlProps {
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  }
}
