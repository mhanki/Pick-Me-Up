import { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/SafeArea";
import { Text } from "../../../components/Text";
import { RestaurantList } from "../../restaurants/screens/RestaurantsScreen.styles";
import { RestaurantInfoCard } from "../../restaurants/components/RestaurantInfoCard";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const FavouritesArea = styled(SafeArea)`
  margin: 0px;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length 
    ? (
      <FavouritesArea style={{ margin: 0 }}>
        <RestaurantList
          data={favourites}
          renderItem={({ item }) => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item})}>
                <RestaurantInfoCard restaurant={item}/>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </FavouritesArea>
      ) 
    : (
      <NoFavouritesArea>
        <Text center>No favourites yet</Text>
      </NoFavouritesArea>
    );
};