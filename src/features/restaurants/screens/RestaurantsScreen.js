import { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MD2Colors } from 'react-native-paper';
import { SafeArea } from '../../../components/SafeArea';
import { FavouritesBar } from '../../../components/FavouritesBar';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { Search } from '../components/Search';
import { 
  RestaurantList,
  LoadingContainer,
  Loading
} from './RestaurantsScreen.styles';
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

export default function RestaurantsScreen({ navigation }) {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => { 
          return(
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
              <RestaurantInfoCard restaurant={item}/>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
}
