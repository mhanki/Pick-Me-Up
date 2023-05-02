import { Searchbar } from 'react-native-paper';
import { SafeArea, SearchContainer, RestaurantList } from './RestaurantScreen.styles';
import RestaurantInfoCard from '../components/RestaurantInfoCard';

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer >
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{
          name: "Some Restaurant",
          icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
          photos: [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
          ],
          address: "100 some random street",
          isOpen: true,
          rating: 4,
          isClosedTemporarily: true
        }, { name: "2"}, { name: "3"}]}
        renderItem={() => <RestaurantInfoCard/>}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
}
