import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
} from '@expo/vector-icons';
import React from 'react';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

import { GlyphMap, Library } from '../../types/Icon';
import { ALL_COLORS } from '../utils/constants';
import { Color, TextColor } from '../../types/Colors';

export interface IIcon<L extends Library> extends IconProps<L> {
    library: L;
    name: GlyphMap<L>;
    color?: TextColor | Color;
}

export const Icon = <L extends Library>({
    library,
    name,
    color = 'white',
    ...rest
}: IIcon<L>) => {
    const col = ALL_COLORS[color];

    switch (library) {
        case 'AntDesign':
            return (
                <AntDesign
                    color={col}
                    name={name as GlyphMap<'AntDesign'>}
                    {...rest}
                />
            );
        case 'Entypo':
            return (
                <Entypo
                    color={col}
                    name={name as GlyphMap<'Entypo'>}
                    {...rest}
                />
            );
        case 'EvilIcons':
            return (
                <EvilIcons
                    color={col}
                    name={name as GlyphMap<'EvilIcons'>}
                    {...rest}
                />
            );
        case 'Feather':
            return (
                <Feather
                    color={col}
                    name={name as GlyphMap<'Feather'>}
                    {...rest}
                />
            );
        case 'FontAwesome':
            return (
                <FontAwesome
                    color={col}
                    name={name as GlyphMap<'FontAwesome'>}
                    {...rest}
                />
            );
        case 'FontAwesome5':
            return (
                <FontAwesome5
                    color={col}
                    name={name as GlyphMap<'FontAwesome5'>}
                    {...rest}
                />
            );
        case 'Fontisto':
            return (
                <Fontisto
                    color={col}
                    name={name as GlyphMap<'Fontisto'>}
                    {...rest}
                />
            );
        case 'Foundation':
            return (
                <Foundation
                    color={col}
                    name={name as GlyphMap<'Foundation'>}
                    {...rest}
                />
            );
        case 'Ionicons':
            return (
                <Ionicons
                    color={col}
                    name={name as GlyphMap<'Ionicons'>}
                    {...rest}
                />
            );
        case 'MaterialCommunityIcons':
            return (
                <MaterialCommunityIcons
                    color={col}
                    name={name as GlyphMap<'MaterialCommunityIcons'>}
                    {...rest}
                />
            );
        case 'MaterialIcons':
            return (
                <MaterialIcons
                    color={col}
                    name={name as GlyphMap<'MaterialIcons'>}
                    {...rest}
                />
            );
        case 'Octicons':
            return (
                <Octicons
                    color={col}
                    name={name as GlyphMap<'Octicons'>}
                    {...rest}
                />
            );
        case 'SimpleLineIcons':
            return (
                <SimpleLineIcons
                    color={col}
                    name={name as GlyphMap<'SimpleLineIcons'>}
                    {...rest}
                />
            );
        case 'Zocial':
            return (
                <Zocial
                    color={col}
                    name={name as GlyphMap<'Zocial'>}
                    {...rest}
                />
            );
        default:
            return null;
    }
};
