import React, { Fragment, useEffect, useMemo } from "react";
import Offer from "../components/Offer";
import { withLayout } from "../components/Layout/withLayout";
import { useLocation, useParams } from "react-router-dom";
import useOrderData from "../hooks/useOrderData";
import Order from "../components/Order";

const OrderPage = () => {

    return (
        <Fragment>
            <Order />
        </Fragment>
    );
};

export default withLayout(OrderPage, "Заказ");
