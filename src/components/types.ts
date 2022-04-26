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
    const obj = {...props.styles};
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