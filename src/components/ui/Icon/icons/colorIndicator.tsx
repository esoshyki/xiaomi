import SVG from "../SVG";
import { IconProps } from "../types";

const ColorIndicatorIcon = (props: IconProps) => {
    return (
        <SVG {...props} width={props.width ?? 8} height={props.height ?? 8}>
            <rect width="8" height="8" rx="4" fill="#78C25E" />
        </SVG>
    );
};

export default ColorIndicatorIcon;
