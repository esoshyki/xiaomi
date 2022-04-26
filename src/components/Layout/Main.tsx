import { ReactNode } from "react";
import styled from "styled-components/macro";

const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    max-width: 1104px;
    margin: 0 auto;
    transition: all 500ms ease-in;
`

const Main = ({ children } : { children: ReactNode}) => {

    return (
        <Wrapper>{children}</Wrapper>
    )
};

export default Main