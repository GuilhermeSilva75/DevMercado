import { View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';

import { useNavigation, ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface HeaderProps {
  title: string
}

import { Container, Title, Menu } from './styles';

export default function Header({ title }: HeaderProps) {

  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()
  return (
    <Container>
      <Menu onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={35} color="black" />
      </Menu>
      {title && (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  );
}