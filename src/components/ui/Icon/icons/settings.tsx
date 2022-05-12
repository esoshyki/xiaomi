import SVG from "../SVG";
import { IconProps } from "../types";

const SettingsIcon = (props: IconProps) => {
    return (
        <SVG
            {...props}
            name="user"
            width={props.width ?? 24}
            height={props.height ?? 24}
        >
            <path d="M15.7999 12C15.7999 14.0986 14.0986 15.7999 12 15.7999V17.7999C15.2032 17.7999 17.7999 15.2032 17.7999 12H15.7999ZM12 15.7999C9.90127 15.7999 8.19995 14.0986 8.19995 12H6.19995C6.19995 15.2032 8.7967 17.7999 12 17.7999V15.7999ZM8.19995 12C8.19995 9.90127 9.90127 8.19995 12 8.19995V6.19995C8.7967 6.19995 6.19995 8.7967 6.19995 12H8.19995ZM12 8.19995C14.0986 8.19995 15.7999 9.90127 15.7999 12H17.7999C17.7999 8.7967 15.2032 6.19995 12 6.19995V8.19995Z"
                fill="currentColor" />
            <path d="M19.6704 7.49143L20.5364 6.99124L20.5364 6.99124L19.6704 7.49143ZM19.7415 7.61441L18.8756 8.1146L18.8756 8.1146L19.7415 7.61441ZM20.5619 8.42169L21.048 7.54781L21.048 7.54781L20.5619 8.42169ZM22.2374 9.35376L21.7512 10.2276H21.7512L22.2374 9.35376ZM22.7924 10.2952L21.7924 10.2975V10.2975L22.7924 10.2952ZM22.8001 13.6997L21.8001 13.702V13.702L22.8001 13.6997ZM22.2436 14.6469L21.7588 13.7723V13.7723L22.2436 14.6469ZM20.564 15.5777L21.0488 16.4523L20.564 15.5777ZM19.7405 16.3866L18.8746 15.8865L18.8746 15.8865L19.7405 16.3866ZM19.6704 16.508L20.5364 17.0082L20.5364 17.0082L19.6704 16.508ZM19.3811 17.6249L18.3812 17.6417V17.6417L19.3811 17.6249ZM19.4134 19.5486L18.4136 19.5654L19.4134 19.5486ZM18.8757 20.5009L18.3737 19.636H18.3737L18.8757 20.5009ZM15.929 22.2111L16.431 23.076H16.431L15.929 22.2111ZM14.8308 22.203L15.3455 21.3456H15.3455L14.8308 22.203ZM13.1824 21.2134L12.6677 22.0708L13.1824 21.2134ZM10.8184 21.2121L11.3322 22.0701H11.3322L10.8184 21.2121ZM9.17761 22.1946L8.66388 21.3366H8.66388L9.17761 22.1946ZM8.0834 22.2038L8.58269 21.3373H8.58269L8.0834 22.2038ZM5.12742 20.5004L5.6267 19.6339L5.12742 20.5004ZM4.58672 19.5463L5.58658 19.5631L4.58672 19.5463ZM4.61906 17.631L3.6192 17.6141L4.61906 17.631ZM4.33395 16.5214L5.20183 16.0246V16.0246L4.33395 16.5214ZM4.25885 16.3902L3.39097 16.8869L3.39097 16.8869L4.25885 16.3902ZM3.43418 15.5755L2.94804 16.4494H2.94804L3.43418 15.5755ZM1.76273 14.6457L1.27658 15.5195H1.27658L1.76273 14.6457ZM1.20769 13.7042L0.207689 13.7065L1.20769 13.7042ZM1.19995 10.2997L2.19995 10.2975L1.19995 10.2997ZM1.75654 9.35249L2.24125 10.2272H2.24125L1.75654 9.35249ZM3.43606 8.42175L2.95134 7.54708H2.95134L3.43606 8.42175ZM4.25956 7.61276L3.39365 7.11257L3.39365 7.11257L4.25956 7.61276ZM4.32965 7.49143L5.19556 7.99162L5.19557 7.99162L4.32965 7.49143ZM4.61901 6.37452L5.61887 6.35769L4.61901 6.37452ZM4.58665 4.45086L3.58679 4.46768L4.58665 4.45086ZM5.12444 3.49848L5.62641 4.36336H5.62641L5.12444 3.49848ZM8.07109 1.78828L8.57306 2.65316L8.57306 2.65316L8.07109 1.78828ZM9.16926 1.79641L8.65455 2.65377V2.65377L9.16926 1.79641ZM10.8177 2.78601L10.3029 3.64337L10.8177 2.78601ZM13.1816 2.7873L12.6679 1.92934V1.92934L13.1816 2.7873ZM14.8225 1.80481L14.3088 0.94685V0.94685L14.8225 1.80481ZM15.9167 1.79565L16.416 0.92921V0.929209L15.9167 1.79565ZM18.8727 3.49906L19.372 2.63262V2.63262L18.8727 3.49906ZM19.4134 4.45311L18.4136 4.43629V4.43629L19.4134 4.45311ZM19.3811 6.37452L18.3812 6.35769V6.3577L19.3811 6.37452ZM18.8045 7.99162L18.8756 8.1146L20.6074 7.11422L20.5364 6.99124L18.8045 7.99162ZM20.0758 9.29556L21.7512 10.2276L22.7235 8.47988L21.048 7.54781L20.0758 9.29556ZM21.7924 10.2975L21.8001 13.702L23.8001 13.6974L23.7924 10.293L21.7924 10.2975ZM21.7588 13.7723L20.0793 14.703L21.0488 16.4523L22.7283 15.5216L21.7588 13.7723ZM18.8746 15.8865L18.8045 16.0078L20.5364 17.0082L20.6064 16.8868L18.8746 15.8865ZM18.3812 17.6417L18.4136 19.5654L20.4133 19.5317L20.3809 17.6081L18.3812 17.6417ZM18.3737 19.636L15.427 21.3463L16.431 23.076L19.3776 21.3658L18.3737 19.636ZM15.3455 21.3456L13.6972 20.356L12.6677 22.0708L14.3161 23.0604L15.3455 21.3456ZM12.0705 19.9053H11.9282V21.9053H12.0705V19.9053ZM10.3047 20.3542L8.66388 21.3366L9.69133 23.0526L11.3322 22.0701L10.3047 20.3542ZM8.58269 21.3373L5.6267 19.6339L4.62813 21.3668L7.58412 23.0702L8.58269 21.3373ZM5.58658 19.5631L5.61891 17.6479L3.6192 17.6141L3.58686 19.5294L5.58658 19.5631ZM5.20183 16.0246L5.12673 15.8934L3.39097 16.8869L3.46606 17.0181L5.20183 16.0246ZM3.92033 14.7016L2.24887 13.7718L1.27658 15.5195L2.94804 16.4494L3.92033 14.7016ZM2.20768 13.7019L2.19995 10.2975L0.199957 10.302L0.207689 13.7065L2.20768 13.7019ZM2.24125 10.2272L3.92077 9.29643L2.95134 7.54708L1.27182 8.47782L2.24125 10.2272ZM5.12548 8.11296L5.19556 7.99162L3.46374 6.99124L3.39365 7.11257L5.12548 8.11296ZM5.61887 6.35769L5.5865 4.43404L3.58679 4.46768L3.61915 6.39134L5.61887 6.35769ZM5.62641 4.36336L8.57306 2.65316L7.56912 0.923394L4.62247 2.63359L5.62641 4.36336ZM8.65455 2.65377L10.3029 3.64337L11.3324 1.92865L9.68398 0.939045L8.65455 2.65377ZM11.9296 4.09416H12.0718V2.09416H11.9296V4.09416ZM13.6954 3.64526L15.3362 2.66276L14.3088 0.94685L12.6679 1.92934L13.6954 3.64526ZM15.4174 2.66208L18.3734 4.36549L19.372 2.63262L16.416 0.92921L15.4174 2.66208ZM18.4136 4.43629L18.3812 6.35769L20.3809 6.39134L20.4133 4.46994L18.4136 4.43629ZM18.3734 4.36549C18.3987 4.38004 18.414 4.40715 18.4136 4.43629L20.4133 4.46994C20.426 3.71375 20.0273 3.01023 19.372 2.63262L18.3734 4.36549ZM15.3362 2.66276C15.3612 2.64783 15.3922 2.64757 15.4174 2.66209L16.416 0.929209C15.7623 0.552551 14.956 0.559301 14.3088 0.94685L15.3362 2.66276ZM12.0718 4.09416C12.6437 4.09416 13.2048 3.93901 13.6954 3.64526L12.6679 1.92934C12.4878 2.03719 12.2818 2.09416 12.0718 2.09416V4.09416ZM10.3029 3.64337C10.7943 3.93834 11.3565 4.09416 11.9296 4.09416V2.09416C11.7192 2.09416 11.5128 2.03695 11.3324 1.92865L10.3029 3.64337ZM8.57306 2.65316C8.5983 2.63851 8.62952 2.63874 8.65455 2.65377L9.68398 0.939045C9.03447 0.549113 8.22433 0.543117 7.56912 0.923394L8.57306 2.65316ZM5.5865 4.43404C5.58602 4.40499 5.60128 4.37795 5.62641 4.36336L4.62247 2.63359C3.97036 3.01207 3.5741 3.7138 3.58679 4.46768L5.5865 4.43404ZM5.19557 7.99162C5.48219 7.49543 5.62851 6.93064 5.61887 6.35769L3.61915 6.39134C3.62269 6.6017 3.56897 6.80906 3.46374 6.99124L5.19557 7.99162ZM3.92077 9.29643C4.42226 9.01852 4.8387 8.60942 5.12548 8.11296L3.39365 7.11257C3.28836 7.29485 3.13546 7.44505 2.95134 7.54708L3.92077 9.29643ZM2.19995 10.2975C2.19989 10.2682 2.21571 10.2413 2.24125 10.2272L1.27182 8.47782C0.608885 8.8452 0.198235 9.54407 0.199957 10.302L2.19995 10.2975ZM2.24887 13.7718C2.2235 13.7577 2.20775 13.7309 2.20768 13.7019L0.207689 13.7065C0.209401 14.4598 0.61827 15.1533 1.27658 15.5195L2.24887 13.7718ZM5.12673 15.8934C4.84068 15.3936 4.42352 14.9815 3.92033 14.7016L2.94804 16.4494C3.13279 16.5521 3.28594 16.7035 3.39097 16.8869L5.12673 15.8934ZM5.61891 17.6479C5.62851 17.0791 5.48442 16.5183 5.20183 16.0246L3.46606 17.0181C3.56982 17.1994 3.62272 17.4053 3.6192 17.6141L5.61891 17.6479ZM5.6267 19.6339C5.60145 19.6194 5.58609 19.5923 5.58658 19.5631L3.58686 19.5294C3.5741 20.2856 3.97281 20.9892 4.62813 21.3668L5.6267 19.6339ZM8.66388 21.3366C8.63895 21.3516 8.60788 21.3518 8.58269 21.3373L7.58412 23.0702C8.23775 23.4469 9.04409 23.4401 9.69133 23.0526L8.66388 21.3366ZM11.9282 19.9053C11.3564 19.9053 10.7953 20.0604 10.3047 20.3542L11.3322 22.0701C11.5123 21.9622 11.7183 21.9053 11.9282 21.9053V19.9053ZM13.6972 20.356C13.2058 20.0611 12.6436 19.9053 12.0705 19.9053V21.9053C12.2809 21.9053 12.4873 21.9625 12.6677 22.0708L13.6972 20.356ZM15.427 21.3463C15.4018 21.3609 15.3706 21.3607 15.3455 21.3456L14.3161 23.0604C14.9656 23.4503 15.7758 23.4563 16.431 23.076L15.427 21.3463ZM18.4136 19.5654C18.4141 19.5944 18.3988 19.6215 18.3737 19.636L19.3776 21.3658C20.0297 20.9873 20.426 20.2856 20.4133 19.5317L18.4136 19.5654ZM18.8045 16.0078C18.5179 16.504 18.3716 17.0688 18.3812 17.6417L20.3809 17.6081C20.3774 17.3977 20.4311 17.1904 20.5364 17.0082L18.8045 16.0078ZM20.0793 14.703C19.5778 14.9809 19.1614 15.39 18.8746 15.8865L20.6064 16.8868C20.7117 16.7046 20.8646 16.5544 21.0488 16.4523L20.0793 14.703ZM21.8001 13.702C21.8002 13.7312 21.7844 13.7581 21.7588 13.7723L22.7283 15.5216C23.3912 15.1542 23.8019 14.4553 23.8001 13.6974L21.8001 13.702ZM21.7512 10.2276C21.7766 10.2418 21.7923 10.2685 21.7924 10.2975L23.7924 10.293C23.7907 9.53964 23.3818 8.84611 22.7235 8.47988L21.7512 10.2276ZM18.8756 8.1146C19.1615 8.60955 19.5763 9.01769 20.0758 9.29557L21.048 7.54781C20.8647 7.44579 20.7124 7.29594 20.6074 7.11422L18.8756 8.1146ZM20.5364 6.99124C20.4311 6.80906 20.3774 6.6017 20.3809 6.39134L18.3812 6.3577C18.3716 6.93064 18.5179 7.49543 18.8045 7.99162L20.5364 6.99124Z"
                fill="currentColor" />

        </SVG>
    );
};

export default SettingsIcon;