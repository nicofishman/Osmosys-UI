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

import { IIcon } from './../src/components/CardIcon';

const NameToImport = {
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
};

export type Glyphs = {
    AntDesign: React.ComponentProps<typeof AntDesign>['name'];
    Entypo: React.ComponentProps<typeof Entypo>['name'];
    EvilIcons: React.ComponentProps<typeof EvilIcons>['name'];
    Feather: React.ComponentProps<typeof Feather>['name'];
    FontAwesome: React.ComponentProps<typeof FontAwesome>['name'];
    FontAwesome5: React.ComponentProps<typeof FontAwesome5>['name'];
    Fontisto: React.ComponentProps<typeof Fontisto>['name'];
    Foundation: React.ComponentProps<typeof Foundation>['name'];
    Ionicons: React.ComponentProps<typeof Ionicons>['name'];
    MaterialCommunityIcons: React.ComponentProps<
        typeof MaterialCommunityIcons
    >['name'];
    MaterialIcons: React.ComponentProps<typeof MaterialIcons>['name'];
    Octicons: React.ComponentProps<typeof Octicons>['name'];
    SimpleLineIcons: React.ComponentProps<typeof SimpleLineIcons>['name'];
    Zocial: React.ComponentProps<typeof Zocial>['name'];
};

export type GlyphMap<G extends Library> = Exclude<
    Glyphs[G],
    'symbol' | 'number' | 'function'
>;

export type Library = keyof typeof NameToImport;

export type CardIconElement<L extends Library> = React.ReactElement<
    IIcon<L>,
    React.JSXElementConstructor<IIcon<L>>
> & {
    type: React.JSXElementConstructor<IIcon<L>>;
};
