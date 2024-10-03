import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, ActivityIndicator,  } from 'react-native';

import { Container, TitleInput, Input, AreaInput, Button } from './styles';

import { AuthContext } from '../../contexts/authContext';

export default function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signUp, loadingAuth } = useContext(AuthContext)

  function handleSignUp(params: any) {
    if (name === '' || email === '' || password === '') {
      return console.log("Preencha os campos");
      
    }


    signUp(name, email, password)
  }

  return (
    <Container>
      <AreaInput>
        <TitleInput>Nome</TitleInput>
        <Input
          value={name}
          placeholder='Seu Nome'
          onChangeText={(text) => setName(text)}
        />
        <TitleInput>Email</TitleInput>
        <Input
          value={email}
          placeholder='Seu email'
          onChangeText={(text) => setEmail(text)}
        />

        <TitleInput>Senha</TitleInput>
        <Input
          value={password}
          placeholder={'*********'}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </AreaInput>

      <Button onPress={handleSignUp}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color="FFF" />
          ) : (
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Cadastrar</Text>
          )
        }
      </Button>
    </Container>
  );
}

