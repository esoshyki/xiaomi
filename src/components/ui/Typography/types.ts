import { ReactNode } from 'react';
import * as CSS from 'csstype'

type Variant =  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "mark" | "error"

export type TextProps = {
  styles?: CSS.Properties
  children: ReactNode
  className?: string
  onClick?: () => void
}

export interface TypographyProps extends TextProps {
  variant: Variant
}