import styled from 'styled-components/macro'

const TestWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    padding: ${props => props.theme.spaces[0]};
    background-color: ${props => props.theme.colors.bgMain};
`

const Test = () => {

    return (
        <TestWrapper>

        </TestWrapper>
    )
}

export default Test