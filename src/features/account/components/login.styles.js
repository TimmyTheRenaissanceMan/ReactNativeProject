import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";


export const LoginContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    background-color: rgba(255, 255, 255, 0.7);
    margin-top: ${(props) => props.theme.space[3]};
    width: 90%;
`;

