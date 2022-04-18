import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Props } from '../../types'

type Sides = "down" | "up" | "left" | "right";

interface WrapperProps {
    left: number
    top: number
    opacity: number
}

const Wrapper = styled.div`
    position: relative;
`;

const TooltipWrapper = styled.div<TooltipProps & WrapperProps>`
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    filter: ${(props) => `opacity(${props.opacity})`};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 10px 20px;
    color: #fff;
    left: ${(props) => `${props.left}px`};
    top: ${(props) => `${props.top}px`};
    transition: filter 500ms ease-in;
    transition-delay: ${props => props.delay ? `${props.delay}ms` : "500ms"}
    ${props => ({
        ...props.styles
    })}
`;

type TooltipProps = Props<{
    children: ReactNode;
    text: string;
    side?: Sides;
    top?: number;
    left?: number;
    delay?: number
}>


export const Tooltip = (props: TooltipProps) => {
    const { children, text, side = "down" } = props;
    const [show, setShow] = useState<boolean>(false);
    const [left, setLeft] = useState<number>(0);
    const [top, setTop] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!show) {
            setOpacity(0)
        }
        if (show && wrapperRef.current && tooltipRef.current) {
            const wrapperWidth = wrapperRef.current.offsetWidth;
            const wrapperHeight = wrapperRef.current.offsetHeight;
            const tooltipWidth = tooltipRef.current.offsetWidth;
            const tooltipHeight = tooltipRef.current.offsetHeight;
            const halfLeft = (wrapperWidth - tooltipWidth) / 2;
            const halfTop = (wrapperHeight - tooltipHeight) / 2;
            setOpacity(1)
            switch (side) {
                case "up":
                    setLeft(props.left ?? halfLeft);
                    setTop(props.top ?? -tooltipHeight);
                    break;
                case "left":
                    setLeft(props.left ?? -tooltipWidth - 20);
                    setTop(props.top ?? halfTop);
                    break;
                case "right":
                    setLeft(props.left ?? wrapperWidth + 20);
                    setTop(props.top ?? halfTop);
                    break;
                default:
                    setLeft(props.left ?? halfLeft);
                    setTop(props.top ?? wrapperHeight);
                    break;
            }
        }
    }, [show, setLeft, setTop, props.left, props.top, side]);

    return (
        <Wrapper
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            ref={wrapperRef}
        >
            {children}
            {show && (
                <TooltipWrapper
                    opacity={opacity}
                    {...props}
                    left={left}
                    top={top}
                    ref={tooltipRef}
                >
                    {text}
                </TooltipWrapper>
            )}
        </Wrapper>
    );
};

export default Tooltip;
