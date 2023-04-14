import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import CardSwiper from '../components/CardSwiper';
import RecentSearchCard from '../components/RecentSearchCard';
import Icon from '../components/CardIcon';

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View
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
            </CardSwiper>
            <Card.MultipleData
                backgroundColor='primary_gray'
                data={[
                    {
                        title: {
                            text: 'GRUPO',
                            style: {
                                fontWeight: '500'
                            },
                            includeIcon: true,
                            iconPosition: 'right',
                            icon: <Icon library='FontAwesome' name='group' />
                        },
                        description: {
                            text: '8-CORR Corrosivos sólidos',
                            style: {
                                color: 'positivo',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    {
                        title: {
                            text: 'INGRESO',
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
            <RecentSearchCard
                code='(MIC-R-385)003/003'
                name='Sodio hidróxido palabra'
            />
        </SafeAreaView>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        marginLeft: '2.5%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    }
});
