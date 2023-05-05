import { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from './AppNavigator';
import { AccountNavigator } from './AccountNavigator';
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};