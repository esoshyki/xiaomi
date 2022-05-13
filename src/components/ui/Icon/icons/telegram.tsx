import SVG from "../SVG";
import { IconProps } from "../types";

const TelegramIcon = (props: IconProps) => {
    return (
        <SVG {...props} width={16} height={13}>
            <path d="M15.9555 1.16465C16.0901 0.560126 15.9266 0.0449715 15.368 0.00119109L15.3681 0.0029803C15.1819 -0.0114829 14.9518 0.0260148 14.6743 0.130384L0.7499 5.37232C0.301374 5.54118 -0.646766 6.11626 0.676945 6.5217L4.11013 7.57206L4.77468 7.26298L12.6306 2.43511C12.7177 2.38194 12.8127 2.34791 12.8973 2.33228C13.1508 2.28869 13.3178 2.42104 12.9514 2.74002L6.31829 8.51316C6.26264 8.56119 6.25922 8.59323 6.25415 8.64083L6.25376 8.6445V12.2456L8.53287 10.2083L12.0556 12.701C12.7355 13.1819 13.2996 13.092 13.4618 12.3637L15.9555 1.16465Z" />
        </SVG>
    );
};

export default TelegramIcon;
