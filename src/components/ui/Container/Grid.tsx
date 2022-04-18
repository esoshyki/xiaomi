import styled from "styled-components/macro";
import { getGridJustify, getGridAligns } from "../../../helpers/getGridProps";
import { Aligns, Justifies, Props } from "../../types";
import { media } from '../../../theme/media'

type GridProps = Props<{
    direction?: "row" | "column";
    cols?: string;
    rows?: string;
    gap?: number;
    alignItems?: Aligns;
    justify?: Justifies;
    fullWidth?: true;
    padding?: number;
    margin?: number;
}>;

const GridContainer = styled.div<GridProps>`
    display: grid;
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    flex-direction: ${(props) => props.direction || "column"};
    ${(props) => ({
        gridTemplateColumns: props.cols ?? "auto",
        gridTemplateRows: props.rows ?? "auto",
        gridGap: props.gap ?? "none",
        justifyContent: getGridJustify(props.justify ?? "start"),
        alignItems: getGridAligns(props.alignItems ?? "center"),
    })}
    padding: ${(props) => `${props.padding || 0}px`};
    margin: ${(props) => `${props.margin || 0}px`};
    ${(props) => ({
        ...props.styles,
    })}
    @media ${media.mobile} {
        padding: 20px;
        ${(props) => ({
            ...props.mobile,
        })}
    }
`;

const Grid = (props: GridProps) => {
    return (
        <GridContainer {...props}>
            {!!props.children && props.children}
        </GridContainer>
    );
};

export default Grid;
