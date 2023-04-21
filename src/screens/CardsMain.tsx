import React from 'react';
import { View } from 'react-native';

import Card from '../components/Card';
import CardSwiper from '../components/CardSwiper';
import Icon from '../components/CardIcon';
import RecentSearchCard from '../components/RecentSearchCard';
import Divider from '../components/Divider';

function CardsMain() {
    return (
        <>
            {/* <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%'
                }}
            >
                <Card.SingleData
                    data={{
                        title: {
                            text: 'Abierto por',
                            style: { color: 'positivo' }
                        },
                        description: {
                            text: 'Juan Pérez',
                            style: { color: 'black', fontWeight: 'bold' }
                        }
                    }}
                />
                <Card.SingleData
                    data={{
                        title: {
                            text: 'CAPACIDAD: ',
                            style: { color: 'gray' }
                        },
                        description: {
                            text: '50 ml',
                            style: { color: 'black', fontWeight: 'bold' }
                        }
                    }}
                />
            </View>
            <CardSwiper
                showDots
                style={{
                    height: 'auto'
                }}
            >
                <Card.MultipleData
                    backgroundColor='background'
                    data={[
                        {
                            title: {
                                text: 'Vencimiento',
                                style: { color: 'gray' }
                            },
                            description: ''
                        },
                        {
                            title: {
                                text: '20 días restantes',
                                style: {
                                    color: 'positivo',
                                    fontSize: 22,
                                    fontWeight: '900'
                                }
                            },
                            description: ''
                        }
                    ]}
                    style={{
                        gap: 0
                    }}
                />
                <Card.MultipleData
                    backgroundColor='background'
                    data={[
                        {
                            title: {
                                text: 'Vencimiento',
                                style: { color: 'gray' }
                            },
                            description: ''
                        },
                        {
                            title: {
                                text: 'Vencido',
                                includeIcon: true,
                                icon: (
                                    <Icon
                                        color='negativo'
                                        library='FontAwesome'
                                        name='warning'
                                        size={16}
                                    />
                                ),
                                style: {
                                    color: 'negativo',
                                    fontSize: 22,
                                    fontWeight: '900'
                                }
                            },
                            description: ''
                        }
                    ]}
                    style={{
                        gap: 0
                    }}
                />
            </CardSwiper> */}
            <Divider color='primary_orange' size='lg' />
            <Card
                backgroundColor='secondary_cyan'
                data={[
                    {
                        title: {
                            text: 'GRUPO',
                            style: {
                                fontFamily: 'Nunito_500Medium'
                            },
                            includeIcon: true,
                            iconPosition: 'right',
                            icon: <Icon library='FontAwesome' name='group' />
                        },
                        description: {
                            text: '8-CORR Corrosivos sólidos',
                            style: {
                                color: 'white',
                                fontFamily: 'Nunito_800ExtraBold'
                            }
                        }
                    },
                    {
                        title: {
                            text: 'INGRESO',
                            style: {
                                fontFamily: 'Nunito_700Bold'
                            },
                            includeIcon: true,
                            icon: (
                                <Icon
                                    library='Entypo'
                                    name='calendar'
                                    size={16}
                                />
                            ),
                            iconPosition: 'right'
                        },
                        description: '01/07/2022'
                    },
                    { title: 'REGISTRADO', description: 'Juan Pérez' },
                    { title: 'ELABORADOR', description: 'USP' },
                    { title: 'PROVEEDOR', description: 'CWO' }
                ]}
            />
            <Card
                backgroundColor='primary_blue'
                data={{
                    title: {
                        text: 'GRUPO',
                        style: {
                            fontFamily: 'Nunito_500Medium'
                        },
                        includeIcon: true,
                        iconPosition: 'right',
                        icon: <Icon library='FontAwesome' name='group' />
                    },
                    description: {
                        text: '8-CORR Corrosivos sólidos',
                        style: {
                            color: 'white',
                            fontFamily: 'Nunito_800ExtraBold'
                        }
                    }
                }}
            />
            {/*
            <RecentSearchCard
                code='(MIC-R-385)003/003'
                color='primary_blue'
                name='Sodio hidróxido palabra'
            /> */}
        </>
    );
}

export default CardsMain;
