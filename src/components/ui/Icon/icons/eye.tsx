import SVG from "../SVG";
import { IconProps } from "../types";

const Eye = (props: IconProps) => {
    return (
        <SVG {...props} width={props.width ?? 20} height={props.height ?? 20}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.8725 10.4886L1.87173 10.49C1.87151 10.4904 1.87187 10.4897 1.87283 10.4881L1.8725 10.4886ZM3.67881 8.53751C3.03156 9.04405 2.57024 9.54836 2.27447 9.9198C2.25257 9.9473 2.23159 9.97405 2.21154 10C2.23159 10.0259 2.25257 10.0527 2.27447 10.0802C2.57024 10.4516 3.03156 10.956 3.67881 11.4625C4.96326 12.4677 7.00082 13.5 10 13.5C12.9992 13.5 15.0367 12.4677 16.3212 11.4625C16.9684 10.956 17.4298 10.4516 17.7255 10.0802C17.7474 10.0527 17.7684 10.0259 17.7885 10C17.7684 9.97405 17.7474 9.9473 17.7255 9.9198C17.4298 9.54836 16.9684 9.04405 16.3212 8.53751C15.0367 7.53228 12.9992 6.5 10 6.5C7.00082 6.5 4.96326 7.53228 3.67881 8.53751ZM19.8736 9.51336C19.8739 9.51387 19.8742 9.51436 19 10C19.8742 10.4856 19.8739 10.4861 19.8736 10.4866L19.873 10.4877L19.8716 10.4902L19.8681 10.4965L19.8581 10.5139C19.8502 10.5276 19.8396 10.5455 19.8264 10.5674C19.8001 10.611 19.763 10.6705 19.715 10.7435C19.6189 10.8893 19.4784 11.0896 19.2901 11.3261C18.914 11.7984 18.3441 12.419 17.5538 13.0375C15.9633 14.2823 13.5008 15.5 10 15.5C6.49918 15.5 4.03674 14.2823 2.44619 13.0375C1.65594 12.419 1.08601 11.7984 0.709907 11.3261C0.521625 11.0896 0.38108 10.8893 0.285021 10.7435C0.236962 10.6705 0.199946 10.611 0.173572 10.5674C0.160382 10.5455 0.149844 10.5276 0.141908 10.5139L0.131946 10.4965L0.128415 10.4902L0.127009 10.4877L0.126396 10.4866C0.126114 10.4861 0.125843 10.4856 1 10C0.125843 9.51436 0.126114 9.51387 0.126396 9.51336L0.127009 9.51226L0.128415 9.50975L0.131946 9.50349L0.141908 9.48612C0.149844 9.47241 0.160382 9.45449 0.173572 9.43264C0.199946 9.38895 0.236962 9.32949 0.285021 9.25654C0.38108 9.11071 0.521625 8.9104 0.709907 8.67395C1.08601 8.20164 1.65594 7.58095 2.44619 6.96249C4.03674 5.71772 6.49918 4.5 10 4.5C13.5008 4.5 15.9633 5.71772 17.5538 6.96249C18.3441 7.58095 18.914 8.20164 19.2901 8.67395C19.4784 8.9104 19.6189 9.11071 19.715 9.25654C19.763 9.32949 19.8001 9.38895 19.8264 9.43264C19.8396 9.45449 19.8502 9.47241 19.8581 9.48612L19.8681 9.50349L19.8716 9.50975L19.873 9.51226L19.8736 9.51336ZM19 10L19.8742 9.51436C20.0419 9.81638 20.0419 10.1836 19.8742 10.4856L19 10ZM0.125843 9.51436L1 10L0.125843 10.4856C-0.0419476 10.1836 -0.0419476 9.81638 0.125843 9.51436ZM11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10ZM13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
            />
        </SVG>
    );
};

export default Eye;
