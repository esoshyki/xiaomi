import styled from "styled-components/macro";
import { getGridJustify, getGridAligns } from "../../../helpers/getGridProps";
import { Aligns, getCommonProps, Justifies, Props } from "../../types";
import { getAnimations } from "../../../theme/animations";

export type GridProps = Props<{
    direction?: "row" | "column";
    cols?: string;
    rows?: string;
    gap?: number;
    verticalGap?: number
    horizontalGap?: number
    alignItems?: Aligns;
    justify?: Justifies;
    fullWidth?: true;
    padding?: number
}>;

const GridContainer = styled.div<GridProps>`
    display: grid;
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    max-width: 100%;
    flex-direction: ${(props) => props.direction || "column"};
    ${(props) => ({
        gridTemplateColumns: props.cols ?? "auto",
        gridTemplateRows: props.rows ?? "auto",
        gridGap: props.gap ?? "none",
        justifyContent: getGridJustify(props.justify ?? "start"),
        alignItems: getGridAligns(props.alignItems ?? "center"),
    })}
    ${(props) => getCommonProps(props)};
    ${props => ({padding: props.padding ? `${props.padding}px` : undefined})};
    ${props => getAnimations(props)};
`;

const Grid = (props: GridProps) => {
    return (
        <GridContainer {...props}>
            {!!props.children && props.children}
        </GridContainer>
    );
};

export default Grid;
