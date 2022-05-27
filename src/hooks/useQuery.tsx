import { useCallback, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import qs from 'qs';
import { useSelector } from "react-redux";
import { getOrderData } from "../store/orderSlice";

const useQuery = () => {

    const { search, pathname } = useLocation();
    const { orderNumber } = useParams();
    const navigate = useNavigate();

    const getParams = useMemo(() => qs.parse(search.replace("?", "")), [search]);

    const makePath = () => {
        const url = process.env.REACT_APP_BASE_URL + pathname;
        return url
    }

    const redirect = useCallback((path?: string) => {
        !!path && navigate(path)
    }, [])

    return ({
        getParams,
        makePath,
        orderNumber,
        redirect
    })
};

export default useQuery