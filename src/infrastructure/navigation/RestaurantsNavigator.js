import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/RestaurantsScreen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ 
      headerShown: false ,
      ...TransitionPresets.ModalPresentationIOS
    }}>
      <RestaurantStack.Screen
        name="Restaurants Stack"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};