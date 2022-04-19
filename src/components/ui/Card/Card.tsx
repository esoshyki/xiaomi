import { Props } from "../../types";
import styled from "styled-components/macro";
import { media } from "../../../theme/media";

type CardProps = Props<{
    padding?: number;
    noPadding?: number;
    margin?: number;
}>;

const Wrapper = styled.div<CardProps>`
    ${(props) => {
        const { padding, noPadding, margin } = props;

        return {
            padding: noPadding ? "0" : padding ?? "20px",
            margin: margin ?? "0",
        };
    }};
    border-radius: ${props => `${props.theme.card.borderRadius}px`};
    background-color: ${props => props.theme.card.bgColor};
    color: ${props => props.theme.card.color ?? props.theme.colors.text.main};
    box-shadow: ${props => props.theme.card.boxShadow};
    @media ${media.mobile} {
        padding: 15px;
    }
`;

const Card = (props: CardProps) => {
    const { children } = props;
    return <Wrapper>{!!children && children}</Wrapper>;
};

export default Card;
