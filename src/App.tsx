import React from "react";
import { withTheme } from "./hooks/withTheme";
import styled from "styled-components/macro";
import UploadFiles from "./contexts/uploadFiles";
import Routes from "./pages/Routes";

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

function App() {
    return (
        <UploadFiles>
            <AppWrapper>
                <Routes />
            </AppWrapper>
        </UploadFiles>
    );
}

export default withTheme(App);
