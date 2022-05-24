import { useCallback, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import qs from 'qs';
import { useSelector } from "react-redux";
import { getOrderData } from "../store/orderSlice";

const useQuery = () => {

    const { search, pathname } = useLocation();
    const { orderNumber } = useParams();
    const navigate = useNavigate();

    console.log(pathname);

    const getParams = useMemo(() => qs.parse(search.replace("?", "")), [search]);

    const makeStateData = () => {
        const url = process.env.REACT_APP_BASE_URL + pathname;
        return url
    }

    const redirect = useCallback((path?: string) => path ? () => {
        navigate(path)
    } : undefined, [])

    return ({
        getParams,
        makeStateData,
        orderNumber,
        redirect
    })
};

export default useQuery