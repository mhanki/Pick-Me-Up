import styled from 'styled-components/native';
import { Card } from "react-native-paper";

export const InfoCard = styled(Card)`
  background-color: ${({theme}) => theme.colors.bg.primary};
  padding: ${({theme}) => theme.space[3]};
  margin-bottom: ${({theme}) => theme.space[3]};
  width: 95%;
  align-self: center;
`;

export const InfoCardCover = styled(Card.Cover)`
  background-color: ${({theme}) => theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${({theme}) => theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.space[2]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({theme}) => theme.space[2]};
  padding-bottom: ${({theme}) => theme.space[2]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Address = styled.Text`
  font-family: ${({theme}) => theme.fonts.body};
  font-size: ${({theme}) => theme.fontSizes.caption};
`;