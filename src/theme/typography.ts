import { colors } from './colors';

export const typography = {
    fontFamily: "Inter, Arial, sans-serif",
    title: {
        fontSize: "17px",
        fontWeight: "600",
        lineHeight: "20px",
        color: colors.text.default
    },
    main: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "20px",
        color: colors.text.default
    },
    big: {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "32px",
        color: colors.text.default
    },
    medium: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "16px",
        color: colors.text.default
    },
    small: {
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "16px",
        color: colors.text.default
    },
    button: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
        color: colors.text.default
    },
    link: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
        color: colors.link.default,
        textDecorationLine: "underline"
    },
    largeRubles: {
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: "24px",
        color: colors.text.default
    },
    mediumRubles: {
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "16px",
        color: colors.text.default
    }
}

export type Typography = typeof typography