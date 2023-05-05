import { ScrollView, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from './CompactRestaurantInfo';
import { Text } from './Text';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
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