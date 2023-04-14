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
import { TEXT_COLORS } from '../constants';

export interface CardIconProps<L extends Library> extends IconProps<L> {
    library: L;
    name: GlyphMap<L>;
    color?: keyof typeof TEXT_COLORS;
}

const Icon = <L extends Library>({
    library,
    name,
    color,
    ...rest
}: CardIconProps<L>) => {
    switch (library) {
        case 'AntDesign':
            return (
                <AntDesign
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'AntDesign'>}
                    {...rest}
                />
            );
        case 'Entypo':
            return (
                <Entypo
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'Entypo'>}
                    {...rest}
                />
            );
        case 'EvilIcons':
            return (
                <EvilIcons
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'EvilIcons'>}
                    {...rest}
                />
            );
        case 'Feather':
            return (
                <Feather
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'Feather'>}
                    {...rest}
                />
            );
        case 'FontAwesome':
            return (
                <FontAwesome
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'FontAwesome'>}
                    {...rest}
                />
            );
        case 'FontAwesome5':
            return (
                <FontAwesome5
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'FontAwesome5'>}
                    {...rest}
                />
            );
        case 'Fontisto':
            return (
                <Fontisto
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'Fontisto'>}
                    {...rest}
                />
            );
        case 'Foundation':
            return (
                <Foundation
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'Foundation'>}
                    {...rest}
                />
            );
        case 'Ionicons':
            return (
                <Ionicons
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'Ionicons'>}
                    {...rest}
                />
            );
        case 'MaterialCommunityIcons':
            return (
                <MaterialCommunityIcons
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'MaterialCommunityIcons'>}
                    {...rest}
                />
            );
        case 'MaterialIcons':
            return (
                <MaterialIcons
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'MaterialIcons'>}
                    {...rest}
                />
            );
        case 'Octicons':
            return (
                <Octicons
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'Octicons'>}
                    {...rest}
                />
            );
        case 'SimpleLineIcons':
            return (
                <SimpleLineIcons
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'SimpleLineIcons'>}
                    {...rest}
                />
            );
        case 'Zocial':
            return (
                <Zocial
                    color={TEXT_COLORS[color ?? 'white']}
                    name={name as GlyphMap<'Zocial'>}
                    {...rest}
                />
            );
        default:
            return null;
    }
};

export default Icon;
