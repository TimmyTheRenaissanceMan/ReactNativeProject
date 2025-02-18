import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeAreaContainer = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
