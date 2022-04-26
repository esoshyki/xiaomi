import { Props } from "../../types";

export type Icons = "telegram" | "loading" | "user" | "reports" | "help" | "info"

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
