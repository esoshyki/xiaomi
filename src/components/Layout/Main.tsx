import { ReactNode } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.main`
    width: 100%;
    height: calc(100vh - 60px);
    max-width: 1104px;
    margin: 0 auto;
`

const Main = ({ children } : { children: ReactNode}) => {

    return (
        <Wrapper>{children}</Wrapper>
    )
};

export default Main