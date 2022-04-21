import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
    width: 100%;
    height: calc(100vh - 60px);
`

const Main = ({ children } : { children: ReactNode}) => {

    return (
        <Wrapper>{children}</Wrapper>
    )
};

export default Main