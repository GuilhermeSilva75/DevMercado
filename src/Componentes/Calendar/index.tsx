import { View, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { Container, ButtonTextFilter, ModalContent, ButonFilter } from './styles';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './LocaleCalendar';

LocaleConfig.locales['Br'] = ptBR
LocaleConfig.defaultLocale = 'Br'

export default function ModalCalendar({ setVisible, handleFilter }: any) {

    const [dateNow, setDateNow] = useState(new Date())
    const [markedDates, setMarkedDates] = useState({})

    function handleOnDayPress(date: any) {
        // console.log(date.dateString);

        setDateNow(new Date(date.dateString))

        let markedDay: any = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#FFF'
        }

        setMarkedDates(markedDay)
    }

    function handlefilterDate() {
        handleFilter(dateNow)
        setVisible()
    }


    return (
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>

            <ModalContent>

                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#FF0000',
                        selctedDayBackgroundColor: '#00adf5',
                        selctedDayTextColor: '#FFF'
                    }}
                />

                <ButonFilter onPress={handlefilterDate}>
                    <ButtonTextFilter>Filtrar</ButtonTextFilter>
                </ButonFilter>
            </ModalContent>
        </Container>
    );
}