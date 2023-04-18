import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import ButtonLoader from '../components/ButtonLoader';

import CardsMain from './CardsMain';
import ButtonsMain from './ButtonsMain';

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CardsMain />
            {/* <ButtonsMain /> */}
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
