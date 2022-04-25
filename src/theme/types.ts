type ButtonProps = {
    backgroundColor: string
    borderRadius: string
}

export type ButtonTheme = {
    primary: ButtonProps
    secondary: ButtonProps
    outline: ButtonProps
}

export type ElementProps<T> = {
    common: T,
    hover: T,
    active: T,
    focus: T,
}

export type InputProps = {
    bgColor: string
    color: string
    borderColor: string
    labelBackground: string
    labelColor: string
}

export type CardProps = {
    bgColor: string;
    color?: string;
    boxShadow: string;
    borderRadius: number;
}

export type TextProps = {
    fontWeight: string
    fontSize: string
    lineHeight: string
    color: string
    textDecorationLine?: string
}

export type ThemeInput = ElementProps<InputProps>