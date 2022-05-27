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
    OrderPage,
    ShopsPage,
} from ".";

import { useRedirect } from "../hooks/useRedirect";
import CreatePage from "./CreatePage";
import OrderItemPage from "./OrderItemPage";

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
            <Route path="/create" element={<CreatePage />} />
            <Route path="/create/:orderNumber" element={<CreatePage />} />
            <Route path="/create/:orderNumber/:itemNumber" element={<CreatePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/shops" element={<ShopsPage />} />
            <Route
                path="/order/:orderNumber"
                element={<OrderPage />}
            />
            <Route
                path="/order/:orderNumber/:itemNumber"
                element={<OrderItemPage />}
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
