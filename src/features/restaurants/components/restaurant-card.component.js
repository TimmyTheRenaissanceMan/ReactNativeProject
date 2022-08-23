import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spaces.component";
import { Text } from "../../../components/text.component";
import {
    IsOpen,
    Rating,
    RestaurantImage,
    Icon,
    Info,
    Row,
    RestaurantStyledCard,
} from "./restaurant-card.styles";
import { Favourite } from "../../../components/favourite.component";
import { View } from 'react-native';

export const RestaurantCard = ({ restaurant = {} }) => {
    const {
        name = "Some restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_AJ58aas.jpg",
            "https://www.restaurantzuiver.nl/wp-content/uploads/2020/02/Restaurant-Zuiver-Amersfoort-16.jpg",
        ],
        address = "123 some street",
        isOpenNow = true,
        rating = 4.7,
        isClosedTemp = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantStyledCard elevation={5}>
            <View>
                <Favourite restaurant={restaurant} />
                <RestaurantImage key={name} source={{ uri: photos[0] }} />
            </View>

            <Info>
                <Text variant="label">{name}</Text>
                <Row>
                    <Rating>
                        {ratingArray.map((_, index) => {
                            return (
                                <SvgXml
                                    key={`star_${restaurant.placeId}_${index}`}
                                    xml={star}
                                    width={20}
                                    height={20}
                                />
                            );
                        })}
                    </Rating>
                    <IsOpen>
                        {isClosedTemp && (
                            <Text style={{ color: "red" }} variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && (
                                <SvgXml xml={open} width={20} height={20} />
                            )}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </IsOpen>
                </Row>
                <Text variant="caption">{address}</Text>
            </Info>
        </RestaurantStyledCard>
    );
};
