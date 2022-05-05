import styled from "styled-components";
import { getCommonProps } from "../../types";
import { SVGProps } from "./types";


const Wrapper = styled.svg<SVGProps>`
    ${props => {
        if (props.color) return { color: props.color}
    }}
    ${(props) => getCommonProps(props)}
`;

const SVG = (props: SVGProps) => {
    return (
        <Wrapper
            onClick={props.onClick}
            className={props.className}
            type={props.name}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${props.width} ${props.height}`}
            fill={props.fill ?? "currentColor"}
            {...props}
            style={{...props.styles}}
        >
            {props.children}
        </Wrapper>
    );
};

export default SVG;
