import React from 'react';
import { SafeAreaView } from 'react-native';

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
