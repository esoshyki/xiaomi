import * as CSS from 'csstype';
import { ReactNode } from 'react';

export type Props<T> = {
    styles?: CSS.Properties,
    children?: ReactNode
} & T

export type Justifies = "start" | "end" | "center" | "around" | "between"
export type Aligns = "start" | "end" | "center"