import * as CSS from 'csstype';
import { ReactNode } from 'react';

export type Props<T> = {
    styles?: CSS.Properties,
    children?: ReactNode
} & T