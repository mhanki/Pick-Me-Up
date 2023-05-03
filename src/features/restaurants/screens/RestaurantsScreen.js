import { useContext } from 'react';
import { Searchbar, MD2Colors } from 'react-native-paper';
import { 
  SearchContainer, 
  RestaurantList,
  LoadingContainer,
  Loading
} from './RestaurantScreen.styles';
import { SafeArea } from '../../../components/SafeArea';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export default function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);

  return (
    <SafeArea>
      <SearchContainer >
        <Searchbar />
      </SearchContainer>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => <RestaurantInfoCard restaurant={item}/>}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
}
