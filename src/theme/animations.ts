import { keyframes, css } from "styled-components";
import { Props } from "../components/types";

const hide = keyframes`
    0% {
        opacity: 1;
        height: auto;
    }
    100% {
        opacity: 0;
        height: 0;
    }
`;

const show = keyframes`
    0% {
        opacity: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        height: 100%;
    }
`;

type _Keyframes = "show" | "hide";
type TimingFunction = "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear" | "step-start" | "step-end"
type IterationCounts = "infinite" | string
type Directions = "normal" | "reverse" | "alternate" | "alternate-reverse"
type FillModes = "none" | "forwards" | "backwards" | "both"

export type Animations = {
    keyframes: _Keyframes,
    duration?: number
    timingFunction?: TimingFunction
    delay?: number 
    iterationCount?: IterationCounts
    direction?: Directions
    fillMode?: FillModes   
};

const getKeyFrame = (keyframe: _Keyframes) => {
    switch(keyframe) {
        case "hide":
            return hide
        case "show":
            return show
        default:
            return hide
    }
}

export const getAnimations = (props: Props<any>) : any => {
    if (props.isHidden) return css`
        animation-name: ${getKeyFrame("hide")};
        animation-duration: 500ms;
        animation-timing-function: ease-in;
        animation-delay: 0ms;
        `;
    if (props.animate) {

        const { keyframes,
            duration = 1500,
            timingFunction = "ease-in",
            delay = 0,
            iterationCount,
            direction = "normal",
            fillMode= "none"
        } = props.animate;
        return css`
            animation-name: ${getKeyFrame(keyframes)};
            animation-duration: ${duration}ms;
            animation-timing-function: ${timingFunction};
            animation-delay: ${delay}ms;
            animation-iteration-count: ${iterationCount};
            animation-direction: ${direction};
            animation-fill-mode: ${fillMode};
        `
    } else {
        css`
            animation: none
        `
    }
};

