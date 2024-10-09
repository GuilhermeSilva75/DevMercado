import { TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns'

import { Background, ListBalance, Area, List, Title } from './styles';
import Header from '../../Componentes/Header';

import api from '../../service/api';

import BalanceItem from '../../Componentes/BalanceItem';

import { useIsFocused } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HistoricoList from '../../Componentes/HistoricoList';


interface BalanceProps {
  saldo: string | number
  tag: string
}

export default function Home() {

  const [listBalance, setListBalance] = useState<BalanceProps[]>([])
  const [dateMovements, setDateMovements] = useState(new Date())
  const [movements, setMovements] = useState([])

  const isFocused = useIsFocused()

  useEffect(() => {
    let isActive = true

    async function getMovements() {
      let dateformated = format(dateMovements, 'dd/MM/yyyy')

      const receives = await api.get('/receives', {
        params: {
          date: dateformated
        }
      })

      const balance = await api.get('/dashboard', {
        params: {
          date: dateformated
        }
      })

      if (isActive) {
        setListBalance(balance.data)
        setMovements(receives.data)
      }

      return () => isActive = false


    }

    getMovements()
  }, [isFocused, dateMovements])

  async function handleDelete(id: string) {
    try {
      await api.delete('delete', {
        params: {
          item_id: id
        }
      })
      setDateMovements(new Date())
    } catch (err) {
      console.log(err);

    }
  }

  return (
    <Background>
      <Header title="Movimentações" />


      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (<BalanceItem data={item} />)}
      />

      <Area>
        <TouchableOpacity>
          <MaterialIcons name="event" size={24} color="black" />
        </TouchableOpacity>
        <Title>Ultimas Movimentações</Title>
      </Area>

      <List
        data={movements}
        renderItem={({ item }) => <HistoricoList data={item} deleteItem={handleDelete} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Background>
  );
}