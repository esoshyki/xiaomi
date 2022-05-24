import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import qs from 'qs';
import { useSelector } from "react-redux";
import { getOrderData } from "../store/orderSlice";

const useQuery = () => {

    const { search } = useLocation();

    const order = useSelector(getOrderData);

    const getParams = useMemo(() => qs.parse(search.replace("?", "")), [search]);

    const makeStateData = () => {

        const { itemNumber, number: orderNumber } = order;

        return (itemNumber && orderNumber) ? qs.stringify({
            itemNumber, orderNumber
        }) : "";
    }

    return ({
        getParams,
        makeStateData
    })
};

export default useQuery