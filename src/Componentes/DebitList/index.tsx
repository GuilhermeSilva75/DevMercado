import { View, TouchableWithoutFeedback, Alert } from 'react-native';
import { Container, TitlView, Title } from './styles';

interface Props{
    data: any
    deleteItem: Function
}

export default function DebitList({ data, deleteItem }: Props) {

    function handleDelete() {
        Alert.alert(
            'Atenção',
            'Deseja deletar esse registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },

                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }

            ]
        )
    }

    return (
        <TouchableWithoutFeedback onPress={handleDelete}>
            <Container>
                <TitlView>
                    <Title>{data.description}</Title>
                    <Title>{data.date}</Title>
                </TitlView>

                <Title>R$: {data.value}</Title>
            </Container>
        </TouchableWithoutFeedback>
    );
}