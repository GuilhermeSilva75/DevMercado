import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import { StackParamList } from '../../Routes/auth.routes';


import { Container, AreaInput, Input, TitleInput, Button } from './styles';
import { AuthContext } from '../../contexts/authContext';

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()
  const { signIn, loadingAuth } = useContext(AuthContext)

  function handlelogin() {
    signIn(email, password)
  }

  return (
    <Container>
      <Image
        source={require('../../../assets/Logo.png')}
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          resizeMode: 'center'
        }}
      />

      <AreaInput>
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

        <Button onPress={handlelogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Acessar</Text>
            )
          }
        </Button>
      </AreaInput>

      <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center', paddingTop: 3 }}
        onPress={() => navigation.navigate('Cadastrar')}
      >
        <Text style={{ color: 'white' }}>Criar uma conta</Text>
      </TouchableOpacity>

    </Container>
  );
}
