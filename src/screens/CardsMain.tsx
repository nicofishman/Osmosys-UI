import React from 'react';

import { Card } from '../components/Card';
import { Icon } from '../components/CardIcon';
import { Divider } from '../components/Divider';

function CardsMain() {
    return (
        <>
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
