import { CompactRestaurantInfo } from '../../../components/CompactRestaurantInfo';

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} isMap={true} />
);