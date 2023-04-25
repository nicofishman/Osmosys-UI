import React from 'react';
import { View } from 'react-native';

import { Table } from '../components/Table';

const TableMain = () => {
    const data = Array.from({ length: 30 }).map((_, i) => {
        return {
            fecha: '9/12/2018',
            registrado: 'Juan López',
            motivo: 'Motivo de consumo ' + (i + 1).toString(),
            consumo: 'Algun motivo de consumo',
            notas: 'Lorem ipsum Lorem ipsum Lorem ipsum'
        };
    });

    return (
        <Table
            stripped
            borderColor='primary_gray'
            data={data}
            head={[
                { id: 'fecha', label: 'Fecha' },
                { id: 'registrado', label: 'Registrado por' },
                { id: 'motivo', label: 'Motivo' },
                { id: 'consumo', label: 'Consumo' },
                { id: 'notas', label: 'Notas' }
            ]}
            headStyle={{
                paddingVertical: 25,
                backgroundColor: '#b3d9e3'
            }}
        />
    );
};

export default TableMain;
