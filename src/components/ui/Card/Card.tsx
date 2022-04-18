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
    box-shadow: 0px 0px 7px 0px rgba(34, 60, 80, 0.2);
    border-radius: 3px;
    @media ${media.mobile} {
        padding: 15px;
    }
`;

const Card = (props: CardProps) => {
    const { children } = props;
    return <Wrapper>{!!children && children}</Wrapper>;
};

export default Card;
