import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  Title,
  AccountButton,
  AnimationWrapper
} from '../components/Account.styles';
import LottieView from "lottie-react-native";

export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="contain"
          source={require("../../../../assets/coffee-love.json")}
        />
      </AnimationWrapper>
      <Title>Pick Me Up</Title>
      <AccountContainer>
        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AccountButton>
        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  )
};