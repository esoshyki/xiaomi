import * as CSS from 'csstype';
import { ReactNode } from 'react';

export type Props<T> = {
    styles?: CSS.Properties
    mobile?: CSS.Properties
    children?: ReactNode
    fullWidth?: true
    fullHeight?: true
    className?: string
} & T

export type Justifies = "start" | "end" | "center" | "around" | "between"
export type Aligns = "start" | "end" | "center"