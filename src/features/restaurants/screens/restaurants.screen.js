import { useContext, useState } from "react";
import { View, FlatList } from "react-native";
import {
    Searchbar,
    ActivityIndicator,
    MD2Colors,
    Colors,
} from "react-native-paper";
import { RestaurantCard } from "../components/restaurant-card.component";
import styled from "styled-components/native";
import { SafeAreaContainer } from "../../../components/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { TouchableOpacity } from "react-native";
import { FavouritesBar } from "../../../components/favouritesBar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;

const Loading = styled(ActivityIndicator)`
    flex: 1;
`;

export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, restaurants } = useContext(RestaurantsContext);
    const [isToggled, setIsToggled] = useState(false);
    const { favourites } = useContext(FavouritesContext);

    return (
        <SafeAreaContainer>
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && (
                <FavouritesBar
                    onNavigate={navigation.navigate}
                    favourites={favourites}
                />
            )}
            {isLoading && (
                <Loading size="large" animating={true} color={Colors.blue800} />
            )}
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("RestaurantDetail", {
                                    restaurant: item,
                                })
                            }
                        >
                            <RestaurantCard restaurant={item} />
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeAreaContainer>
    );
};
