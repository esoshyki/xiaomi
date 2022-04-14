import { ReactNode } from 'react';

export enum TextColors {
  Black100 = "#171A22",
  Grey10 = "#E8E8E9",
  Grey20 = "#D1D1D3",
  Grey40 = "#A2A3A7",
  Grey60 = "#74767A",
  Primary = "#6678E2",
  PrimaryHover = "#8b9dfa",
  Error = "#db2845"
}

export type TextProps = {
  fontSize?: number
  marginTop?: number
  marginBottom?: number
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  lineHeight?: number
  color?: TextColors
  className?: string
  children: ReactNode
  position?: "relative" | "absolute" | "static",
  top?: number
  left?: number
  hover?: true
  onClick?: () => void
}