import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurantDetail.sceen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = (params) => {
    return (
        <RestaurantStack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
        >
            <RestaurantStack.Screen
                name="Restaurants"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};
