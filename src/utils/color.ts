/**
 *  Lightens or darkens a color by a percentage
 * @param hexColor Color in hex format
 * @param magnitude What percentage to lighten or darken the color. Positive numbers lighten, negative numbers darken.
 * @returns RGB formatted changed color
 */
export function LightenDarkenColor(hexColor: string, magnitude: number) {
    let R = parseInt(hexColor.substring(1, 3), 16);
    let G = parseInt(hexColor.substring(3, 5), 16);
    let B = parseInt(hexColor.substring(5, 7), 16);

    R = parseInt(((R * (100 + magnitude)) / 100).toString());
    G = parseInt(((G * (100 + magnitude)) / 100).toString());
    B = parseInt(((B * (100 + magnitude)) / 100).toString());

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    R = Math.round(R);
    G = Math.round(G);
    B = Math.round(B);

    const RR =
        R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
    const GG =
        G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
    const BB =
        B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

    return '#' + RR + GG + BB;
}
