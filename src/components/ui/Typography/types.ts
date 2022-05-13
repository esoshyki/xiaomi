import { ReactNode } from 'react';
import { css } from 'styled-components';
import { Props } from '../../types';

type Variant =  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "mark" | "error"

export type TextProps = Props<{
  textAlign?: "center" | "end" | "start"
  underline?: boolean
  onClick?: () => void
  start?: true
  withIndicator?: true
}>

export const getTextProps = (props: TextProps) => {
  return css`
    text-decoration-line: ${props.underline ? "underline" : "none"};
    text-decoration: ${props.underline ? "underline" : "none"};
  `
}

export interface TypographyProps extends TextProps {
  variant: Variant
}