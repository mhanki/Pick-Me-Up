import { SettingsScreen } from "../../features/settings/screens/SettingsScreen";
import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen";
import { CameraScreen } from "../../features/settings/screens/CameraScreen";
import { AntDesign } from '@expo/vector-icons';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { colors } from "../theme/colors";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: { 
          backgroundColor: colors.brand.primary
        },
        headerTitleStyle: {
          color: 'white',
          marginLeft: 0
        }
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Setting Options"
        component={SettingsScreen}
      />
      <SettingsStack.Screen 
        name="Favourites" 
        component={FavouritesScreen} 
        options={{
          headerLeft: () => (
            <AntDesign
              name={"heart"}
              size={24}
              color={colors.brand.secondary}
              marginLeft={25}
            />
          )
        }} 
      />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};