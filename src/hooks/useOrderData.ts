import { useSelector } from 'react-redux';
import { getOrderSendPhotosStatus } from '../store/orderSlice';
export default function useOrderData () {
    
    const sendPhotoStatus = useSelector(getOrderSendPhotosStatus);

    return ({
        sendPhotoStatus
    })
}