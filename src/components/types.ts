import { GridProps } from './ui/Container/Grid';
import * as CSS from 'csstype';
import { ReactNode } from 'react';
import { FlexProps } from './ui/Container/Flex';
import { Animations } from '../theme/animations';

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
    padding?: number | string
    margin?: number | string
    className?: string
    breakpoints?: {
        [k: number] : CSS.Properties
    }
    animate?: Animations,
    isHidden?: true
    onAnimationEnd?: () => void
} & T

export type Justifies = "start" | "end" | "center" | "around" | "between"
export type Aligns = "start" | "end" | "center";

export const getCommonProps = (props: Props<any>) => {
    const { padding, margin, fullWidth, fullHeight } = props;
    const obj = {...props.styles};
    if (padding) {
        if (typeof padding === "number") {
            obj.padding = `${padding}px`
        } else {
            obj.padding = padding
        }
    }
    if (margin) {
        if (typeof margin === "number") {
            obj.margin = `${margin}px`
        } else {
            obj.margin = margin
        }
    }
    if (fullWidth) {
        obj.width = "100%"
    }
    if (fullHeight) {
        obj.height = "100%"
    }
    if (props.breakpoints) {
        Object.entries(props.breakpoints).forEach(([media, styles]) => {
            obj[`@media screen and (max-width: ${media}px)`] = styles
        })
    };

    return obj
};

export const collectGap = (props: GridProps | FlexProps) => {
    return ({
        "& > *" : {
            margin: props.gap ? `${props.gap}px` : undefined,
            marginTop: props.verticalGap ? `${props.verticalGap}px` : undefined,
            marginBottom: props.verticalGap ? `${props.verticalGap}px` : undefined,
            marginLeft: props.horizontalGap ? `${props.horizontalGap}px` : undefined,
            marginRight: props.horizontalGap ? `${props.horizontalGap}px` : undefined,
            "&:first-child": {
                marginTop: props.verticalGap ? 0 : undefined,
                marginLeft: props.horizontalGap ? 0 : undefined,
            },
            "&:last-child": {
                marginBottom: props.verticalGap ? 0 : undefined,
                marginRight: props.horizontalGap ? 0 : undefined,
            }
        }
    })
}