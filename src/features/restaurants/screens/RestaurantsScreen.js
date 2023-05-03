import { useContext } from 'react';
import { MD2Colors } from 'react-native-paper';
import { SafeArea } from '../../../components/SafeArea';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { Search } from '../components/Search';
import { 
  RestaurantList,
  LoadingContainer,
  Loading
} from './RestaurantScreen.styles';
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export default function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  if(err) console.log(error);

  return (
    <SafeArea>
      <Search />
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
