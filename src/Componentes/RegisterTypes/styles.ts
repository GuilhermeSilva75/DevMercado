import styled from "styled-components/native";

interface StylePorps{
    checked: boolean
}

export const RegisterContainer = styled.View`
flex-direction: row;
width: 100%;
padding-left: 5%;
padding-right: 5%;
justify-content: space-between;
align-items: center;
`

export const RegisterTypeButton = styled.TouchableOpacity<StylePorps>`
background-color: ${props => props.checked ? '#FFF' : '#E7E7E7'};
width: 47%;
justify-content: center;
align-items: center;
flex-direction: row;
height: 45px;
border-width: 3px;
border-color: ${props => props.checked ? '#121212' : 'transparent'};
border-radius: 4px;
margin-bottom: 14px;
`

export const LabelName = styled.Text`
margin-left: 8px;
font-size: 17px;
`