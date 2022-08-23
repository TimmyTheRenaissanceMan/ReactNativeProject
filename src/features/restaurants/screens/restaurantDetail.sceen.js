import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaContainer } from "../../../components/safe-area.component";
import { Menu } from "../components/menu";
import { RestaurantCard } from "../components/restaurant-card.component";

export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;
    return (
        <SafeAreaContainer>
            <ScrollView>
                <RestaurantCard restaurant={restaurant} />
                <Menu />
            </ScrollView>
        </SafeAreaContainer>
    );
};
