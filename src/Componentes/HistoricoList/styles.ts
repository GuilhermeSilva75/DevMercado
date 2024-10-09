import styled from "styled-components/native";

interface StyleProps{
    tipo: any
}

export const Container = styled.View`
background-color: #F3F0FF;
border-radius: 4px;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 10px;
padding: 12px;
`

export const TipoText = styled.Text`
color: #FFF;
font-size: 16px;
font-style: italic;
`

export const Tipo = styled.View`
flex-direction: row;
`

export const IconView = styled.View<StyleProps>`
flex-direction: row;
background-color: ${props => props.tipo === 'Venda' ? '#049301' : '#c62c36'};
padding-top: 4px;
padding-bottom: 4px;
padding-left: 8px;
padding-right: 8px;
border-radius: 4px;
margin-bottom: 4px;
`

export const ValorText = styled.Text`
color: #121212;
font-size: 22px;

`
