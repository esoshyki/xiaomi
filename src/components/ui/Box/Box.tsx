import { styled } from "../../../helpers/styled";
import { getCommonProps, Props } from "../../types";

type BoxProps = Props<{}>

export const Box = styled.div<BoxProps>`
    ${props => getCommonProps(props)}
`