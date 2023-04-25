import { StyleSheet, View, type ViewProps } from 'react-native';

import { Color } from '../../types/Colors';
import { TitleDescriptionPair } from '../../types/TextType';
import { COLORS } from '../utils/constants';
import { formatTextItem } from '../utils/cardTextUtils';

import { CardText } from './CardText';

export interface ICard extends ViewProps {
    /**
     * The background color of the component. This should be a key of the `COLORS` object.
     */
    backgroundColor?: Color;
    /**
     * The data to be displayed in the card. This can be either a single object or an array of objects.
     */
    data: TitleDescriptionPair | Array<TitleDescriptionPair>;
}

export function Card({
    data,
    backgroundColor = 'background',
    style,
    ...props
}: ICard) {
    const background = COLORS[backgroundColor];

    if (!Array.isArray(data)) {
        data = [data];
    }

    return (
        <View
            style={[
                {
                    height: 'auto',
                    paddingHorizontal: 6,
                    paddingVertical: 6,
                    minHeight: 34,
                    borderRadius: 5,
                    width: 'auto',
                    gap: 15
                },
                styles.container,
                style,
                {
                    backgroundColor: background
                }
            ]}
            {...props}
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
        </View>
    );
}

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
