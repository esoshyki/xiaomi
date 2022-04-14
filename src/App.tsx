import React from "react";
import { withLayout } from "./hooks/withTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Theme from "./pages/Theme";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/theme" element={<Theme /> } />
            </Routes>
        </Router>
    );
}

export default withLayout(App);
