import { TextProps } from './../types';
import { css } from 'styled-components';
export const getTextAlign = (props: TextProps) => {
    const { start, textAlign } = props;
    const value = start ? "start" : textAlign ?? "center";
    return css`
        text-align: ${value}
    `
}