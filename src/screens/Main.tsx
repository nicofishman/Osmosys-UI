import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ButtonLoader from '../components/ButtonLoader';
import Icon from '../components/CardIcon';
import Button from '../components/Button';
import CardSwiper from '../components/CardSwiper';
import Card from '../components/Card';
import Divider from '../components/Divider';
import ButtonRow from '../components/ButtonRow';
import { Input } from '../components/Input';
import RecentSearchCard from '../components/RecentSearchCard';
import TopBarView from '../components/TopBarView';
import InputCard from '../components/CardInput';

import CardsMain from './CardsMain';
import ButtonsMain from './ButtonsMain';

function fakeFetch() {
    console.log('fake');

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ok');
        }, 4500);
    });
}

const Main = () => {
    const [data, setData] = useState({
        usuario: '',
        contrasena: '',
        numero: ''
    });

    function updateState(value: string, name: string) {
        setData({
            ...data,
            [name]: value
        });
    }

    return (
        // <TopBarView
        //     arrowPress={() => console.log('Arrow Pressed')}
        //     code='(MIC-R-385)003/003'
        //     color='secondary_cyan'
        //     style={{
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         paddingHorizontal: 10
        //     }}
        // >
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10
            }}
        >
            <StatusBar />
            {/* <CardsMain /> */}
            {/* <ButtonsMain /> */}
            <InputCard
                cardStyle={{ backgroundColor: 'primary_blue' }}
                endDecorator={
                    <Icon
                        color='secondary_blue'
                        library='Ionicons'
                        name='send'
                        size={20}
                    />
                }
                placeholder='Ingrese: Nombre o codigo'
                placeholderTextColor={'white'}
                style={{
                    color: 'white'
                }}
                value={data.usuario}
                onChangeText={(value) => updateState(value, 'usuario')}
                onSend={() => console.log('Send')}
            />
            {/* </TopBarView> */}
        </SafeAreaView>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        backgroundColor: '#ffF',
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '2.5%',
        gap: 15
    }
});
