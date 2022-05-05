import { GridProps } from './ui/Container/Grid';
import * as CSS from 'csstype';
import { ReactNode } from 'react';
import { FlexProps } from './ui/Container/Flex';
import { Animations } from '../theme/animations';

export const breakpoints = {
    xl: 1536,
    lg: 1280,
    md: 1104,
    sm: 660,
    xs: 450
}

export type Props<T> = {
    styles?: CSS.Properties
    children?: ReactNode
    fullWidth?: true
    fullHeight?: true
    uppercase?: true
    padding?: number | string
    margin?: number | string
    className?: string
    breakpoints?: {
        [k: number] : CSS.Properties
    }
    onClick?: (e?: any) => void;
    hoverStyles?: CSS.Properties
    activeStyles?: CSS.Properties
    focusStyles?: CSS.Properties
    animate?: Animations,
    isHidden?: true
    onAnimationEnd?: () => void
} & T

export type Justifies = "start" | "end" | "center" | "around" | "between"
export type Aligns = "start" | "end" | "center" | "stretch";

export const getCommonProps = (props: Props<any>) => {
    const { padding, margin, fullWidth, fullHeight } = props;
    const obj = {...props.styles};
    if (typeof padding !== "undefined") {
        if (typeof padding === "number") {
            obj.padding = `${padding}px`
        } else {
            obj.padding = padding
        }
    }
    if (typeof margin !== "undefined") {
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
    if (props.hoverStyles) {
        obj["&:hover"] = props.hoverStyles
    };
    if (props.activeStyles) {
        obj["&:active"] = props.activeStyles
    };
    if (props.focusStyles) {
        obj["&:focus"] = props.focusStyles
    }

    return obj
};

export const collectGap = (props: GridProps | FlexProps) => {
    return ({
        "& > *" : {
            margin: props.gap ? `${props.gap}px ${props.gap}px 0 0` : undefined,
            marginTop: props.verticalGap ? `${props.verticalGap}px` : undefined,
            marginRight: props.horizontalGap ? `${props.horizontalGap}px` : undefined,
        }
    })
}
export const collectWrapperMargin = (props: GridProps | FlexProps) => {
    return ({
        margin: props.gap ? `-${props.gap}px -${props.gap}px 0 0` : undefined,
        marginTop: props.verticalGap ? `-${props.verticalGap}px` : undefined,
        marginRight: props.horizontalGap ? `-${props.horizontalGap}px` : undefined
    })
}