import styled from 'styled-components/macro'
import Button from '../ui/Button'

const TestWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    padding: ${props => props.theme.spaces[0]};
    background-color: ${props => props.theme.colors.bgMain};
`

const Test = () => {

    return (
        <TestWrapper>
            <Button onClick={() => {}}>Кнопка</Button>
        </TestWrapper>
    )
}

export default Test