import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${({theme}) => theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        iconColor={ colors.brand.secondary }
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        style={{ backgroundColor: colors.brand.muted }}
      />
    </SearchContainer>
  );
};