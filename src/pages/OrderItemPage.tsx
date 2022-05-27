import { Fragment, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withLayout } from "../components/Layout/withLayout";
import Offer from "../components/Offer";
import useQuery from "../hooks/useQuery";
import { setCombinationCode } from "../store/offerSlice";
import { GetOrder, getOrderItemData, setQrCode } from "../store/orderSlice";

const OrderPage = () => {

    const { itemNumber, orderNumber } = useParams();
    const { search } = useLocation();

    const navigate = useNavigate();
    const { isLoading, errors, orderData } = useSelector(getOrderItemData);
    const dispatch = useDispatch();

    const qrCode = useMemo(() => {
        const params = new URLSearchParams(search);

        return params.get("qrcode");
    }, [search]);

    useEffect(() => {
        if (qrCode) {
            dispatch(setQrCode(qrCode));
            navigate(`/order/${orderNumber}/${itemNumber}`)
        }
    }, [qrCode])

    const currentItem = useMemo(() => {
        return orderData?.items.find((item) => item.itemNumber === itemNumber);
    }, [itemNumber, orderData]);

    useEffect(() => {
        if (!isLoading) {
            dispatch(GetOrder.request({ itemNumber, orderNumber }))
        }
    }, [itemNumber]);


    useEffect(() => {
        if (!isLoading && !orderData && !errors.length) {
            dispatch(GetOrder.request({itemNumber, orderNumber}))
        };

        if (orderData?.items.every(el => el.status === "D") || orderData?.status === "D") {
            navigate("/order/" + orderNumber)
        }
    }, [orderData, isLoading, errors]);

    const showOffer = useMemo(() => {
        if (isLoading) return false;
        if (!currentItem) return false;
        if (!itemNumber && !orderNumber) return true;
        return true;
    }, [currentItem]);

    return <Fragment>
            {showOffer && <Offer />}
        </Fragment>;
};

export default withLayout(OrderPage, "Заказ");
