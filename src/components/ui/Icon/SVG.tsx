import styled from "styled-components";
import { SVGProps } from "./types";


const Wrapper = styled.svg<SVGProps>`
    ${(props) => ({
        ...props.styles,
    })}
`;

const SVG = (props: SVGProps) => {
    return (
        <Wrapper
            className={props.className}
            type={props.name}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            viewBox={`0 0 ${props.width} ${props.height}`}
            fill={props.fill ?? "currentColor"}
        >
            {props.children}
        </Wrapper>
    );
};

export default SVG;
