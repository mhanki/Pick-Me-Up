import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Card } from "react-native-paper";
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from './CompactRestaurantInfo';
import { Text } from './Text';

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  background-color: ${({theme}) => theme.colors.brand.secondary};
  border-radius: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper elevation={2}>
      <Text style={{ marginLeft: 16 }} variant="caption">Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;

          return (
            <View key={key} style={{ marginLeft: 8 }} >
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} isMap={false} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};