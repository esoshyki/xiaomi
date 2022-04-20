import React from "react";
import { withTheme } from "./hooks/withTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import styled from "styled-components";
import { withCookies } from "react-cookie";
import { withAuth } from "./hooks/withAuth";
import Profile from "./pages/Profile";

const AppWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    background-color: ${props => props.theme.colors.bgMain};
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/theme" element={<Theme />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </AppWrapper>
    );
}

export default withCookies(withAuth(withTheme(App)));
