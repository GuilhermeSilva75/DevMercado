import { Image } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, LinkButton, ButtonLogout, TextButton } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../../contexts/authContext';

import { DrawerParamList } from '../../Routes/app.routes';

import Header from '../../Componentes/Header';

export default function Profile() {

    const navigation = useNavigation<NativeStackNavigationProp<DrawerParamList>>()
    const { signOut } = useContext(AuthContext)

    return (
        <Container>

            <Header title='Perfil' />
            <Image
                source={require('../../../assets/Logo.png')}
                style={{
                    resizeMode: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: -110
                }}
            />

            <LinkButton onPress={() => navigation.navigate('New')}>
                <TextButton>Registrar Compra</TextButton>
            </LinkButton>

            <ButtonLogout onPress={() => signOut()}>
                <TextButton>Sair</TextButton>
            </ButtonLogout>
        </Container>
    );
}