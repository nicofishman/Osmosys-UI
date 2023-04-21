import { Text } from 'react-native';
import React from 'react';

import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';
import { LightenDarkenColor } from '../utils/color';
import { COLORS, TEXT_COLORS } from '../constants';

function fakeFetch() {
    console.log('fake');

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ok');
        }, 3000);
    });
}

const ButtonsMain = () => {
    return (
        <>
            <ButtonRow>
                <Button backgroundColor='primary_gray' onPress={fakeFetch}>
                    <Text>sm 1</Text>
                </Button>
                <Button backgroundColor='secondary_cyan' onPress={fakeFetch}>
                    <Text>sm 2</Text>
                </Button>
                <Button backgroundColor='primary_blue' onPress={fakeFetch}>
                    <Text>sm 2</Text>
                </Button>
            </ButtonRow>
            <ButtonRow>
                <Button
                    backgroundColor='background'
                    textStyle={{
                        color: 'green'
                    }}
                    onPress={fakeFetch}
                >
                    <Text>Movimientos</Text>
                </Button>
                <Button backgroundColor='secondary_blue' onPress={fakeFetch}>
                    <Text>Consumos</Text>
                </Button>
            </ButtonRow>
            <ButtonRow>
                <Button backgroundColor='primary_orange' onPress={fakeFetch}>
                    <Text
                        numberOfLines={2}
                        style={{
                            color: TEXT_COLORS['white']
                        }}
                    >
                        DESCARGAR FICHA DE SEGURIDAD
                    </Text>
                </Button>
            </ButtonRow>
            <Button
                backgroundColor='primary_gray'
                size='sm'
                onPress={() => console.log('cñl')}
            >
                <Text numberOfLines={2}>Sm</Text>
            </Button>
            <Button
                backgroundColor='secondary_cyan'
                size='md'
                onPress={() => console.log('cñl')}
            >
                <Text numberOfLines={2}>Entrar</Text>
            </Button>
            <Button backgroundColor='primary_blue' size='lg' onPress={() => {}}>
                <Text>DESCARGAR FICHA DE SEGURIDAD</Text>
            </Button>
        </>
    );
};

export default ButtonsMain;
