import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

const ModalMain = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Modal
                backdropStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 50,
                    paddingTop: 80
                }}
                open={open}
                onOpenChange={setOpen}
            >
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: 10
                    }}
                >
                    <Text>Here comes the sun ☀ (and a modal)</Text>
                </View>
            </Modal>
            <Button
                onPress={() => {
                    setOpen(!open);
                }}
            >
                <Text>Test</Text>
            </Button>
        </>
    );
};

export default ModalMain;
