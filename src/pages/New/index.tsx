import { View, Text, SafeAreaView, Alert, Keyboard } from 'react-native';
import { Container, Title, Input, SubmitButton } from './styles';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerParamList } from '../../Routes/app.routes';

import Header from '../../Componentes/Header';

import RegisterTypes from '../../Componentes/RegisterTypes';
import api from '../../service/api';
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native';

export default function New() {

  const [labelInput, setLabelInput] = useState('1 Venda')
  const [valueInput, setValueInput] = useState('')
  const [type, setType] = useState('Venda')
  const navigation = useNavigation<NativeStackNavigationProp<DrawerParamList>>()

  function handleSubmit() {
    Keyboard.dismiss()

    if (isNaN(parseFloat(valueInput)) || type === null) {
      alert('Preencha todos os campos')
      return
    }

    Alert.alert(
      'Confirmand Dados',
      `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Registrar',
          onPress: () => HandleAdd()
        }
      ]
    )

    async function HandleAdd() {
      Keyboard.dismiss()

      await api.post('/receive', {
        description: labelInput,
        value: Number(valueInput),
        type: type,
        date: format(new Date, 'dd/MM/yyyy')
      })

      setLabelInput('')
      setValueInput('')
      navigation.navigate('Home')
    }
  }

  return (
    <Container>

      <Header title='Registrando' />

      <Title>Registrar</Title>
      <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>

        <Input
          placeholder='Descrição'
          value={labelInput}
          onChangeText={(text) => setLabelInput(text)}
        />

        <Input
          placeholder='Valor'
          keyboardType='numeric'
          value={valueInput}
          onChangeText={(text) => setValueInput(text)}
        />

        <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

        <SubmitButton onPress={handleSubmit}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#FFF' }}>
            Registrar</Text>
        </SubmitButton>
      </SafeAreaView>

    </Container>
  );
}