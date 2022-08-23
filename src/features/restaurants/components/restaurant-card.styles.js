import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantStyledCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantImage = styled(Card.Cover)`
    padding: ${(props) => props.theme.sizes[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
    padding: ${(props) => props.theme.sizes[2]};
`;

export const Rating = styled(View)`
    flex-direction: row;
`;

export const IsOpen = styled(View)`
    flex-direction: row;
    align-items: flex-end;
`;

export const Icon = styled(Image)`
    width: 15px;
    height: 15px;
`;

export const Row = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${(props) => props.theme.sizes[0]};
    padding-bottom: ${(props) => props.theme.sizes[0]};
`;
