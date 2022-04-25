import React from "react";
import { withTheme } from "./hooks/withTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import styled from "styled-components/macro";
import Profile from "./pages/Profile";

const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
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

export default withTheme(App);
