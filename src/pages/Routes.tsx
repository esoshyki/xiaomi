import { ReactNode } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import {
    HomePage,
    ThemePage,
    ProfilePage,
    NewRequestPage,
    ProfileEditPage,
    LoginPage,
    PartnerPage,
    HelpPage,
    CreateOfferPage,
    OrderPage,
} from ".";
import useURL from "../hooks/useUrl";

const WithUrl = () => {
    useURL();

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/theme" element={<ThemePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/new_request" element={<NewRequestPage />} />
            <Route path="/edit" element={<ProfileEditPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/create" element={<CreateOfferPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/order/:orderNumber" element={<OrderPage />} />
            <Route
                path="/order/:orderNumber/:itemNumber"
                element={<OrderPage />}
            />
        </Routes>
    );
};

const RoutesComponent = () => {
    return (
        <Router>
            <WithUrl />
        </Router>
    );
};

export default RoutesComponent;
