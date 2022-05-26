import { memo, ReactNode } from "react";
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
import { useRedirect } from "../hooks/useRedirect";

const WithUrl = memo(() => {

    useRedirect();

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
            <Route path="/create" element={<OrderPage />} />
            <Route path="/create/:orderNumber" element={<OrderPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route
                path="/order/:orderNumber/:itemNumber"
                element={<OrderPage />}
            />
        </Routes>
    );
});

const RoutesComponent = () => {
    return (
        <Router>
            <WithUrl />
        </Router>
    );
};

export default memo(RoutesComponent);
