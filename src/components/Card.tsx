import { StyleSheet, Text, View, type ViewProps } from 'react-native';

import { TitleDescriptionPair } from '../../types/TextType';
import { COLORS } from '../constants';
import { formatTextItem } from '../utils/cardTextUtils';
import { Color } from '../../types/Colors';

import CardText from './CardText';

export interface ICard extends ViewProps {
    /**
     * The background color of the component. This should be a key of the `COLORS` object.
     */
    backgroundColor?: Color;
}

export interface IMultipleData extends ICard {
    data: Array<TitleDescriptionPair>;
}

export interface ISingleData extends ICard {
    data: TitleDescriptionPair;
}

/**
 *  General box that displays information. This is just an internal implementation and should not be used in apps.
 */
export default function Card({
    children,
    backgroundColor = 'background',
    style,
    ...props
}: ICard) {
    const background = COLORS[backgroundColor];

    return (
        <View
            style={[
                styles.container,
                style,
                {
                    backgroundColor: background
                }
            ]}
            {...props}
        >
            {children}
        </View>
    );
}

const MultipleData = ({ data, ...props }: IMultipleData) => {
    const { style, ...rest } = props;

    return (
        <Card
            backgroundColor={props.backgroundColor}
            style={[
                {
                    flexDirection: 'column',
                    height: 'auto',
                    gap: 15
                },
                style
            ]}
            {...rest}
        >
            {data.map((item, index) => {
                const { text: titleText, ...titleFormatted } = formatTextItem(
                    item.title
                );
                const { text: descriptionText, ...formattedDescription } =
                    formatTextItem(item.description);

                return (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start'
                        }}
                    >
                        <CardText
                            numberOfLines={1}
                            style={{
                                maxWidth:
                                    descriptionText.length > 0 ? '50%' : '100%'
                            }}
                            text={{
                                text: `${titleText}`,
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    flex: 1,
                                    color:
                                        typeof item.title === 'string'
                                            ? 'white'
                                            : titleFormatted.color ?? 'white'
                                },
                                ...titleFormatted
                            }}
                        />
                        {descriptionText.length > 0 && (
                            <CardText
                                text={{
                                    text: `${descriptionText}`,
                                    style: {
                                        fontSize: 16,
                                        color:
                                            typeof item.description === 'string'
                                                ? 'white'
                                                : formattedDescription.color ??
                                                  'white',
                                        textAlign: 'left',
                                        flex: 1
                                    },
                                    ...formattedDescription
                                }}
                            />
                        )}
                    </View>
                );
            })}
        </Card>
    );
};

Card.MultipleData = MultipleData;

const SingleData = ({ data, style, ...props }: ISingleData) => {
    const { text: titleText, ...titleFormatted } = formatTextItem(data.title);

    const { text: descriptionText, ...descriptionFormatted } = formatTextItem(
        data.description
    );

    return (
        <Card
            backgroundColor={props.backgroundColor}
            {...props}
            style={[
                {
                    height: 'auto',
                    paddingHorizontal: 6,
                    paddingVertical: 6,
                    minHeight: 34,
                    borderRadius: 5,
                    width: 'auto'
                },
                style
            ]}
        >
            <Text
                style={{
                    width: '100%'
                }}
            >
                <CardText
                    numberOfLines={1}
                    text={{
                        text: `${titleText}`,
                        style: [
                            {
                                fontSize: 16,
                                minWidth: 0,
                                fontVariant: ['oldstyle-nums'],
                                color:
                                    typeof data.title === 'string'
                                        ? 'white'
                                        : titleFormatted.color ?? 'white'
                            }
                        ],
                        ...titleFormatted
                    }}
                />
                {descriptionText.length > 0 && (
                    <CardText
                        text={{
                            text: `${descriptionText}`,
                            style: {
                                fontSize: 16,
                                minWidth: 0,
                                color:
                                    typeof data.description === 'string'
                                        ? 'white'
                                        : descriptionFormatted.color ?? 'white'
                            },
                            ...descriptionFormatted
                        }}
                    />
                )}
            </Text>
        </Card>
    );
};

Card.SingleData = SingleData;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: '100%',
        minHeight: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 14,
        shadowColor: '#000000',
        elevation: 10
    }
});
