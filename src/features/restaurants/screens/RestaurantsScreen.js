import { StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfoCard from '../components/RestaurantInfoCard';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${ StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;` } /* fix for ios */
`;

const SearchContainer = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.space[3]};
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer >
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
          <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}
