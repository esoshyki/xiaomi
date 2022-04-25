import { Props } from "../../types";
import styled from "styled-components/macro";
import { media } from "../../../theme/media";

type CardProps = Props<{
    padding?: number;
    noPadding?: number;
    margin?: number;
    noShadow?: true
}>;

const Wrapper = styled.div<CardProps>`
    ${(props) => {
        const { padding, noPadding, margin } = props;

        return {
            padding: noPadding ? "0" : padding ?? "20px",
            margin: margin ?? "0",
        };
    }};
    border-radius: 20px;
    background-color: ${props => props.theme.colors.background.opacity};
    width: ${props => props.fullWidth ? "100%" : "auto"};
    height: ${props => props.fullHeight ? "100%" : "auto"};
    ${props => ({
        ...props.styles
    })}
    @media ${media.mobile} {
        padding: 15px;
    }
`;

const Card = (props: CardProps) => {
    const { children } = props;
    return <Wrapper {...props}>{!!children && children}</Wrapper>;
};

export default Card;
