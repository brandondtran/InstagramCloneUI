// TODO: Use themes
import styled from "styled-components/native";

// General
export const IgcLink = styled.TouchableOpacity`
    color: blue;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 13px;
`;

// Page
export const IgcPageView = styled.View`
    flex: 1;
    justify-content: center;
    background-color: white;
`;

export const IgcPageTitle = styled.Text`
    font-size: 24px;
    text-align: center;
`;

// Form
export const IgcFormView =  styled.View`
    flex: 1;
    justify-content: center;
    gap: 15px;
    padding: 0 10px;
`;

export const IgcTextInput = styled.TextInput`
    height: 40px;
    border-color: gray;
    border-width: 1px;
    border-radius: 5px;
    padding: 0 10px;
`;
