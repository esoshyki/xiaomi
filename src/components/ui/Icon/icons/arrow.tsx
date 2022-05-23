import SVG from "../SVG";
import { IconProps } from "../types";

const Arrow = (props: IconProps) => {
    return (
        <SVG {...props} width={props.width ?? 20} height={props.height ?? 20}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4571 7.54289C16.8476 7.93342 16.8476 8.56658 16.4571 8.95711L11.6642 13.75C10.8832 14.531 9.61684 14.531 8.83579 13.75L4.04289 8.95711C3.65237 8.56658 3.65237 7.93342 4.04289 7.54289C4.43342 7.15237 5.06658 7.15237 5.45711 7.54289L10.25 12.3358L15.0429 7.54289C15.4334 7.15237 16.0666 7.15237 16.4571 7.54289Z"
                fill="currentColor"
            />
        </SVG>
    );
};

export default Arrow;
