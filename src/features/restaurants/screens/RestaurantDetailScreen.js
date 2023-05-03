import { SafeArea } from '../../../components/SafeArea';
import RestaurantInfoCard from '../components/RestaurantInfoCard';

export function RestaurantDetailScreen({route}) {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
}