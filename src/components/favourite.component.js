import { useContext } from "react";
import { FavouritesContext } from "../services/favourites/favourites.context";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native-paper";

const FavouriteBtn = styled(TouchableOpacity)`
    z-index: 9;
    position: absolute;
    top: 3px;
    right: 3px;
`;

export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(
        FavouritesContext
    );
    const isFavourite = favourites.find((r) => r.placeId == restaurant.placeId);

    return (
        <FavouriteBtn
            onPress={() =>
                isFavourite
                    ? removeFromFavourites(restaurant)
                    : addToFavourites(restaurant)
            }
        >
            <AntDesign
                name={isFavourite ? "heart" : "hearto"}
                size={34}
                color={isFavourite ? "red" : "grey"}
            />
        </FavouriteBtn>
    );
};
