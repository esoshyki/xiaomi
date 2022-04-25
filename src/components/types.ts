import * as CSS from 'csstype';
import { ReactNode } from 'react';

export const breakpoints = {
    xl: 1536,
    lg: 1200,
    md: 900,
    sm: 600,
    xs: 450
}

export type Props<T> = {
    styles?: CSS.Properties
    children?: ReactNode
    fullWidth?: true
    fullHeight?: true
    className?: string
    breakpoints?: {
        [k: number] : CSS.Properties
    }
} & T

export type Justifies = "start" | "end" | "center" | "around" | "between"
export type Aligns = "start" | "end" | "center";

export const getCommonProps = (props: Props<any>) => {
    const obj = {...props.styles};
    if (props.breakpoints) {
        Object.entries(props.breakpoints).forEach(([media, styles]) => {
            obj[`@media screen and (max-width: ${media}px)`] = styles
        })
    };

    return obj
}