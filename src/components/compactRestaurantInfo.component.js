import { View } from "react-native";
import styled from "styled-components/native";
import { Text } from "./text.component";
import { WebView } from "react-native-webview";

const Tooltip = styled(View)`
    border-radius: 10px;
    padding: 10px;
    align-items: center;
`;

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    const Image = isAndroid && isMap ? CompactWebview : CompactImage;
    return (
        <Tooltip>
            <Image
                source={{
                    uri: restaurant.photos[0],
                }}
            />
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Tooltip>
    );
};
