import SVG from "../SVG";
import { IconProps } from "../types";

const HelpIcon = (props: IconProps) => {
    return (
        <SVG
            {...props}
            name="user"
            width={props.width ?? 24}
            height={props.height ?? 24}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 20.9451V17.917C8.4875 17.4955 6.50448 15.5125 6.08296 13H3.05493C3.51608 17.1716 6.82838 20.4839 11 20.9451ZM11 6.08296C8.4875 6.50448 6.50448 8.4875 6.08296 11H3.05493C3.51608 6.82838 6.82838 3.51608 11 3.05493V6.08296ZM20.9451 13C20.4839 17.1716 17.1716 20.4839 13 20.9451V17.917C15.5125 17.4955 17.4955 15.5125 17.917 13H20.9451ZM20.9451 11C20.4839 6.82838 17.1716 3.51608 13 3.05493V6.08296C15.5125 6.50448 17.4955 8.4875 17.917 11H20.9451ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
                fill="currentColor"
            />
        </SVG>
    );
};

export default HelpIcon;