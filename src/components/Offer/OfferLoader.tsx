import { zIndexes } from "../../zIndexes";
import { Box, Container } from "../ui";

const OfferLoader = () => {
    return (
        <Container.Flex
            justify="center"
            alignItems="center"
            fullWidth
            fullHeight
            styles={{
                zIndex: zIndexes.loader
            }}
        >
            <Box styles={{ width: "100px", height: "100px"}}>
            <svg
                className="loader-xmix"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <defs>
                    <filter
                        id="gooey"
                        x="-100%"
                        y="-100%"
                        width="300%"
                        height="300%"
                        colorInterpolationFilters="sRGB"
                    >
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="2.4000000000000004"
                        ></feGaussianBlur>
                        <feComponentTransfer result="cutoff">
                            <feFuncA
                                type="linear"
                                slope="10"
                                intercept="-5"
                            ></feFuncA>
                        </feComponentTransfer>
                    </filter>
                </defs>
                <g filter="url(#gooey)">
                    <g transform="translate(50 50)">
                        <g transform="rotate(88.2229)">
                            <circle cx="17" cy="0" r="5.95261" fill="#3be8b0">
                                <animate
                                    attributeName="r"
                                    keyTimes="0;0.5;1"
                                    values="3.5999999999999996;8.399999999999999;3.5999999999999996"
                                    dur="4s"
                                    repeatCount="indefinite"
                                    begin="-4s"
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                keyTimes="0;1"
                                values="0;360"
                                dur="4s"
                                repeatCount="indefinite"
                                begin="0s"
                            ></animateTransform>
                        </g>
                    </g>
                    <g transform="translate(50 50)">
                        <g transform="rotate(320.446)">
                            <circle cx="17" cy="0" r="4.46522" fill="#1aafd0">
                                <animate
                                    attributeName="r"
                                    keyTimes="0;0.5;1"
                                    values="3.5999999999999996;8.399999999999999;3.5999999999999996"
                                    dur="2s"
                                    repeatCount="indefinite"
                                    begin="-3.2s"
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                keyTimes="0;1"
                                values="0;360"
                                dur="2s"
                                repeatCount="indefinite"
                                begin="-0.8s"
                            ></animateTransform>
                        </g>
                    </g>
                    <g transform="translate(50 50)">
                        <g transform="rotate(336.669)">
                            <circle cx="17" cy="0" r="8.06217" fill="#6a67ce">
                                <animate
                                    attributeName="r"
                                    keyTimes="0;0.5;1"
                                    values="3.5999999999999996;8.399999999999999;3.5999999999999996"
                                    dur="1.3333333333333333s"
                                    repeatCount="indefinite"
                                    begin="-2.4s"
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                keyTimes="0;1"
                                values="0;360"
                                dur="1.3333333333333333s"
                                repeatCount="indefinite"
                                begin="-1.6s"
                            ></animateTransform>
                        </g>
                    </g>
                    <g transform="translate(50 50)">
                        <g transform="rotate(136.891)">
                            <circle cx="17" cy="0" r="7.62956" fill="#ffb900">
                                <animate
                                    attributeName="r"
                                    keyTimes="0;0.5;1"
                                    values="3.5999999999999996;8.399999999999999;3.5999999999999996"
                                    dur="1s"
                                    repeatCount="indefinite"
                                    begin="-1.6s"
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                keyTimes="0;1"
                                values="0;360"
                                dur="1s"
                                repeatCount="indefinite"
                                begin="-2.4s"
                            ></animateTransform>
                        </g>
                    </g>
                    <g transform="translate(50 50)">
                        <g transform="rotate(81.1143)">
                            <circle cx="17" cy="0" r="5.76305" fill="#fc636b">
                                <animate
                                    attributeName="r"
                                    keyTimes="0;0.5;1"
                                    values="3.5999999999999996;8.399999999999999;3.5999999999999996"
                                    dur="0.8s"
                                    repeatCount="indefinite"
                                    begin="-0.8s"
                                ></animate>
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                keyTimes="0;1"
                                values="0;360"
                                dur="0.8s"
                                repeatCount="indefinite"
                                begin="-3.2s"
                            ></animateTransform>
                        </g>
                    </g>
                </g>
            </svg>
            </Box>
        </Container.Flex>
    );
};

export default OfferLoader;
