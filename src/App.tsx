import React from "react";
import { withTheme } from "./hooks/withTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import styled from "styled-components";

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${props => props.theme.colors.bgMain};
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/theme" element={<Theme />} />
                </Routes>
            </Router>
        </AppWrapper>
    );
}

export default withTheme(App);
