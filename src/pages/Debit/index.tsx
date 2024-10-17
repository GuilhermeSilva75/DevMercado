import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Container, List } from './styles';
import Header from '../../Componentes/Header';
import DebitList from '../../Componentes/DebitList';

import api from '../../service/api';

export default function Debit() {

    const isFocused = useIsFocused()
    const [debit, setDebit] = useState([])

    let isActive = true

    useEffect(() => {
        async function getDebit() {
            const response = await api.get('debit', {
                params: {
                    type: 'debito'
                }
            })

            if (isActive) {
                setDebit(response.data)
            }
        }

        getDebit()
    }, [isFocused, debit])

    async function handleDelete(id: string) {
        try {
            await api.delete('delete', {
                params: {
                    item_id: id
                }
            })
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <Container>
            <Header title='Débitos' />

            <List
                data={debit}
                renderItem={({ item }) => <DebitList data={item} deleteItem={handleDelete}/>}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    );
}