import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { CompactRestaurantInfo } from "./compactRestaurantInfo.component";
import { Text } from "./text.component";
import { Spacer } from "./spaces.component";

const FavouriteWrapper = styled(View)`
    padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null;
    }
    return (
        <FavouriteWrapper>
            <View style={{ paddingLeft: 10 }}>
                <Text variant="caption">Favourites</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name.split(" ").join("");
                    return (
                        <View key={key} style={{ marginRight: 10 }}>
                            <TouchableOpacity
                                onPress={() =>
                                    onNavigate("RestaurantDetail", {
                                        restaurant,
                                    })
                                }
                            >
                                <CompactRestaurantInfo
                                    restaurant={restaurant}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
        </FavouriteWrapper>
    );
};
