import styled from "styled-components"
import { getFlexJustify } from "../../../helpers/getFlexProps"
import { Props } from "../../types"

type FlexProps = Props<{
    direction?: "row" | "column"
    justify: "start" | "end" | "center"
    alignItems: "start" | "end" | "center"
}>

const FlexContainer = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => getFlexJustify(props.justify)};
    align-items: ${props => getFlexJustify(props.alignItems)};
`

const Flex = (props: FlexProps) => {

    return <FlexContainer {...props}>
        {!!props.children && props.children}
    </FlexContainer>
}

export default Flex