import { Props } from "../../types";

export type Icons = "telegram" | "loading" | "user" | "reports" | "help" | "info" | "photo" | "add-plus" | "hidden" | "eye" | "eye-close"
    | "settings" | "employee" | "order-list" | "new-order" | "exit"| "bell"| "edit" | "color-indicator" | "arrow" | "qr-code"

export type IconProps = Props<{
    name: Icons,
    width?: number
    height?: number
    color?: string
}>

export type SVGProps = Props<{
    fill?: string;
    height: number;
    width: number;
    name: Icons,
    className?: string
}>;
