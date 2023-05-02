import { SvgXml } from 'react-native-svg';
import { Text } from '../../../components/Text';
import { 
  InfoCard,
  InfoCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address 
} from './RestaurantInfoCard.styles';
import star from '../../../../assets/star.js';
import open from '../../../../assets/open.js';

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpen = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <InfoCard elevation={4}>
      <InfoCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="title">{name}</Text>
        <Section>
          <Rating>
            {[...Array(Math.floor(rating))].map((val, i) => 
              <SvgXml key={i} xml={star} width="20" height="20"/>
            )}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">
                CLOSED TEMPORARILY
              </Text>
            )}
            {isOpen && <SvgXml xml={open} width="20" height="20"/>}
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </InfoCard>
  );
}