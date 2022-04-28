import { ReactNode } from "react"
import { styled } from '../../../helpers/styled'
import { zIndexes } from "../../../zIndexes"
import { Props } from "../../types"
import Container from "../Container"

type OverlayProps = Props<{
    children: ReactNode
    padding?: number | string;
}>

const Wrapper = styled.div<{padding?: number | string}>`
    position: fixed;
    z-index: ${zIndexes.overlay};
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    ${props => {
        if (props.padding) {
            if (typeof props.padding === "number") {
                return {
                    padding: `${props.padding}px`
                }
            } else {
                return {
                    padding: `${props.padding}`
                }
            }
        }
    }}
`

const Overlay = ({ children, padding } : OverlayProps) => {

    return (
        <Wrapper padding={padding}>
            <Container.Flex fullHeight fullWidth>
            {children}
            </Container.Flex>
        </Wrapper>
    )
}

export default Overlay