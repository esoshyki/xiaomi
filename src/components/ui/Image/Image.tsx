import styled from "styled-components";
import * as CSS from 'csstype'
import { Props } from "../../types";
import { getCommonProps } from "../../types";

const Img = styled.img<ImgProps>`
    ${props => ({
        width: props.width ? `${props.width}px` : "auto",
        height: `${props.height}px`,
        ...props.styles
    })}
    ${props => getCommonProps(props)};
	image-rendering: -webkit-optimize-contrast;
	image-rendering: crisp-edges;
`;

type ImgProps = Props<{
    width?: number
    height: number
    alt: string
    styles?: CSS.Properties
    src: string
    noBasePath?: true
}>;

const baseImagePath = "https://rostok-partners.dev-bitrix.by/"

const Image = (props: ImgProps) => {

    return (
        <Img {...props} src={(props.noBasePath ? "" : baseImagePath) + props.src}/>
    )
};

export default Image