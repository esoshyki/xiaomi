import { Props } from "../../types";

export type Icons = "telegram" | "loading" | "user"

export type IconProps = Props<{
    name: Icons,
}>

export type SVGProps = Props<{
    fill?: string;
    height: number;
    width: number;
    name: Icons,
    className?: string
}>;
