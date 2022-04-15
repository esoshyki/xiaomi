type ButtonProps = {
    bgcolor: string
    textColor: string
    borderColor: string
    hoverBackground: string
    activeBackground: string
}

export type ButtonTheme = {
    primary: ButtonProps
    secondary: ButtonProps
    outline: ButtonProps
}

type ElementProps<T> = {
    common: T,
    hover: T,
    active: T,
    focus: T,
}

type InputProps = {
    bgColor: string
    color: string
    borderColor: string
}

export type ThemeInput = ElementProps<InputProps>