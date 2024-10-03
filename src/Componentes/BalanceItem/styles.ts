import styled from "styled-components/native";
type StylesProps = {
    bg: any
}

export const Container = styled.View<StylesProps>`
background-color: #${props => props.bg};
margin-left: 14px;
margin-right: 14px;
border-radius: 4px;
justify-content: center;
align-items: flex-start;
width: 300px;
padding-left: 14px;
`
export const Label = styled.Text`
color: #FFF;
font-size: 20px;
font-weight: bold;
`

export const Balance = styled.Text`
margin-top: 5px;
color: #FFF;
font-size: 30PX;
`

