import React, { useState } from 'react';

import { Icon } from '../components/CardIcon';
import { Input } from '../components/Input';

const InputMain = () => {
    const [data, setData] = useState({
        usuario: ''
    });

    function updateState(text: string, name: string) {
        setData({ ...data, [name]: text });
    }

    return (
        <Input
            color='primary_orange'
            leftIcon={
                <Icon
                    color='primary_orange'
                    library='AntDesign'
                    name='user'
                    size={25}
                />
            }
            placeholder='usuario'
            type='password'
            value={data.usuario}
            onChangeText={(text) => updateState(text, 'usuario')}
        />
    );
};

export default InputMain;
