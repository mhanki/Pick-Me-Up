import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export const SearchContainer = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;