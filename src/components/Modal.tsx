import React from 'react';
import {
    Modal as RNModal,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
    type ModalProps as RNModalProps
} from 'react-native';

import { Icon } from './CardIcon';

interface IModal extends RNModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    showCloseIcon?: boolean;
    backdropStyle?: ViewStyle;
}

export const Modal = ({
    children,
    open,
    onOpenChange,
    backdropStyle,
    showCloseIcon = true,
    ...props
}: IModal) => {
    return (
        <RNModal
            transparent
            animationType='fade'
            visible={open}
            onRequestClose={() => {
                onOpenChange(false);
            }}
            {...props}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View
                    style={[
                        {
                            backgroundColor: '#0007',
                            flex: 1,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        backdropStyle
                    ]}
                >
                    <View
                        style={{
                            position: 'relative',
                            width: '100%'
                        }}
                    >
                        {showCloseIcon && (
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -40,
                                    right: 0,
                                    padding: 4,
                                    borderRadius: 5,
                                    backgroundColor: 'white'
                                }}
                            >
                                <TouchableWithoutFeedback
                                    onPress={() => onOpenChange(false)}
                                >
                                    <Icon
                                        color={'black'}
                                        library='Ionicons'
                                        name={'close'}
                                        size={25}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                        )}
                        {children}
                    </View>
                </View>
            </View>
        </RNModal>
    );
};
