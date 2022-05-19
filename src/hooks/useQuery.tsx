import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import qs from 'qs';
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { select } from "../store/selector";

const useQuery = () => {

    const { search } = useLocation();

    const offer = useSelector(select.offer);

    const getParams = useMemo(() => qs.parse(search.replace("?", "")), [search]);

    const makeStateData = () => {

        const { order } = offer;

        const { itemHash, orderNumber } = order;

        return (itemHash && orderNumber) ? qs.stringify({
            itemHash, orderNumber
        }) : "";
    }

    return ({
        getParams,
        makeStateData
    })
};

export default useQuery