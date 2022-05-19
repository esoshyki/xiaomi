import React from "react";
import { withTheme } from "./hooks/withTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { 
    HomePage, ThemePage, ProfilePage, NewRequestPage, ProfileEditPage, LoginPage, PartnerPage, HelpPage, ChatPage
} from './pages'
import styled from "styled-components/macro";

const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/theme" element={<ThemePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/new_request" element={<NewRequestPage />} />
                    <Route path="/edit" element={<ProfileEditPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/partner" element={<PartnerPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                </Routes>
            </Router>
        </AppWrapper>
    );
}

export default withTheme(App);
