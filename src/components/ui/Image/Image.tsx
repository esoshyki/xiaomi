import styled from "styled-components";
import * as CSS from 'csstype'

const Img = styled.img<ImgProps>`
    ${props => ({
        width: props.width ? `${props.width}px` : "auto",
        height: `${props.height}px`,
        ...props.styles
    })}
`;

interface ImgProps {
    width?: number
    height: number
    alt: string
    styles?: CSS.Properties
    src: string
};

const baseImagePath = "https://rostok-partners.dev-bitrix.by/"

const Image = (props: ImgProps) => {

    return (
        <Img {...props} src={baseImagePath + props.src}/>
    )
};

export default Image