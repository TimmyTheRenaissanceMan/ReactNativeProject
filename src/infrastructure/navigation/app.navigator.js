import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaContainer } from "../../components/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

export const AppNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color: size }) => (
                        <Ionicons
                            name={TAB_ICON[route.name]}
                            size={24}
                            color="black"
                        />
                    ),
                })}
            >
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Restaurants"
                    component={RestaurantsNavigator}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Map"
                    component={MapScreen}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Settings"
                    component={Settings}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const Settings = () => {
    return <SafeAreaContainer></SafeAreaContainer>;
};

const TAB_ICON = {
    Restaurants: "restaurant-outline",
    Settings: "settings",
    Map: "map-outline",
};
