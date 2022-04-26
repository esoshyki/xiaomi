import { useTheme } from "styled-components";
import SVG from "../SVG";
import { IconProps } from "../types";

const InfoIcon = (props: IconProps) => {
    const theme = useTheme()
    return (
        <SVG
            {...props}
            name="user"
            width={props.width ?? 20}
            height={props.height ?? 20}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM8.9502 13.4502C8.9502 12.8979 9.39791 12.4502 9.9502 12.4502H10.0502C10.6025 12.4502 11.0502 12.8979 11.0502 13.4502V13.5502C11.0502 14.1025 10.6025 14.5502 10.0502 14.5502H9.9502C9.39791 14.5502 8.9502 14.1025 8.9502 13.5502V13.4502ZM11 6.4502C11 5.89791 10.5523 5.4502 10 5.4502C9.44771 5.4502 9 5.89791 9 6.4502V10.4502C9 11.0025 9.44771 11.4502 10 11.4502C10.5523 11.4502 11 11.0025 11 10.4502V6.4502Z"
                fill={props.color ? "currentColor" : theme.colors.icon.default}
            />
        </SVG>
    );
};

export default InfoIcon;
