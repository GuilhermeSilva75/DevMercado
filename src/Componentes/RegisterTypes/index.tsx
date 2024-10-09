import { View } from 'react-native';
import React, { useState } from 'react';
import { RegisterContainer, RegisterTypeButton, LabelName } from './styles';

import AntDesign from '@expo/vector-icons/AntDesign';

interface RegisterProps {
    type: string
    sendTypeChanged: (item: any) => any
    
}

export default function RegisterTypes({ type, sendTypeChanged }: RegisterProps) {

    const [typeChecked, setTypeChecked] = useState(type)

    function changeType(name: string) {
        setTypeChecked(name)
        sendTypeChanged(name)
    }

    return (
        <RegisterContainer>

            <RegisterTypeButton 
            checked={typeChecked === 'Venda' ? true : false}
            onPress={() => changeType('Venda')}
            >
                <AntDesign name="arrowup" size={24} color="black" />
                <LabelName>Venda</LabelName>
            </RegisterTypeButton>

            <RegisterTypeButton 
            checked={typeChecked === 'debito' ? true : false}
            onPress={() => changeType('debito')}
            >
                <AntDesign name="arrowdown" size={24} color="black" />
                <LabelName>Débito</LabelName>
            </RegisterTypeButton>
        </RegisterContainer>
    );
}