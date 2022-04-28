import { ReactNode } from 'react';
import * as CSS from 'csstype'
import { Props } from '../../types';

type Variant =  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "mark" | "error"

export type TextProps = Props<{
  textAlign?: "center" | "end" | "start"
  onClick?: () => void
  start?: true
}>

export interface TypographyProps extends TextProps {
  variant: Variant
}