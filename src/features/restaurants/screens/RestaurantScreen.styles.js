import styled from 'styled-components/native';
import { StatusBar, FlatList } from 'react-native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${ StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;` } /* fix for ios */
`;

export const SearchContainer = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;