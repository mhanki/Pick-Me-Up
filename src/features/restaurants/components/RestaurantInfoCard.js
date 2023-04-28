import styled from 'styled-components/native';
import { Card } from "react-native-paper";

const InfoCard = styled(Card)`
  background-color: white;
  padding: 20px;
`;

const InfoCardCover = styled(Card.Cover)`
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <InfoCard elevation={4}>
      <InfoCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </InfoCard>
  );
}