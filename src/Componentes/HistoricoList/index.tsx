import { View, TouchableWithoutFeedback, Alert } from 'react-native';
import { Container, TipoText, Tipo, IconView, ValorText } from './styles';

import AntDesign from '@expo/vector-icons/AntDesign';

interface ReceivesProps {
    data: any,
    deleteItem: Function
}

export default function HistoricoList({ data, deleteItem }: ReceivesProps) {

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
        <TouchableWithoutFeedback onLongPress={handleDelete}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <AntDesign
                            name={data.type === 'Venda' ? 'arrowup' : 'arrowdown'}
                            size={24}
                            color="#FFF" />
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                </Tipo>

                <ValorText>
                    R$: {data.value}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    );
}