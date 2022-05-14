import { css } from 'styled-components';
import { Props } from '../../types';

export type TextProps = Props<{
  textAlign?: "center" | "end" | "start"
  underline?: boolean
  onClick?: () => void
  start?: true
  withIndicator?: true
  color?: string
}>

export const getTextProps = (props: TextProps) => {
  return css`
    text-decoration-line: ${props.underline ? "underline" : "none"};
    text-decoration: ${props.underline ? "underline" : "none"};
  `
}