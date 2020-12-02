/**
 * Преобразовывает строку в цвет формата HSL
 * @param value строка для преобразования
 * @return строка с цветом в формате HSL
 */
// @bad TODO: переделать stringHashToHsl в stringHashToRgb
export function stringHashToHsl(value: string): string {
    if (value === '') {
        return '';
    }

    let hash = 0;

    for (let i = 0; i < value.length; i++) {
        /* tslint:disable: no-bitwise */
        hash = value.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
        /* tslint:enable: no-bitwise */
    }

    const hue = hash % 360;
    const saturation = 60 + (hash % 5);
    const lightness = 80 + (hash % 5);

    return `hsl(${hue},${saturation}%,${lightness}%)`;
}
