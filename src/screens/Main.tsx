import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import InputMain from './InputMain';

const Main = () => {
    return (
        <SafeAreaView
            style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 20
            }}
        >
            <InputMain />
            {/* <CardsMain /> */}
            {/* <ButtonsMain /> */}
            {/* <ModalMain /> */}
            {/* <View>
                <TableMain />
            </View> */}
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
