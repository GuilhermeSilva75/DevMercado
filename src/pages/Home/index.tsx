import { View, Text, Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns'

import { Background, ListBalance } from './styles';
import Header from '../../Componentes/Header';

import api from '../../service/api';

import BalanceItem from '../../Componentes/BalanceItem';

import { useIsFocused } from '@react-navigation/native'

export default function Home() {

  const [listBalance, setListBalance] = useState([])
  const [dateMovements, setDateMovements] = useState(new Date())

  const isFocused = useIsFocused()

  useEffect(() => {
    let isActive = true

    async function getMovements() {
      let dateformated = format(dateMovements, 'dd/MM/yyyy')

      const balance = await api.get('/dashboard', {
        params: {
          date: dateformated
        }
      })

      if (isActive) {
        setListBalance(balance.data)
      }

      return () => isActive = false


    }

    getMovements()
  }, [isFocused])

  return (
    <Background>
      <Header title="Movimentações" />


      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({ item }) => (<BalanceItem data={item}/>)}
      />
    </Background>
  );
}