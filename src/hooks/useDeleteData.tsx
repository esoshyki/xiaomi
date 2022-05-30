import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteItem, getDeleteData, setDeleteItemNumber } from "../store/orderSlice";
import { redirectTo } from "../store/viewSlice";


export default function useDeleteData () {
    
    const dispatch = useDispatch();
    
    const deleteData = useSelector(getDeleteData);

    useEffect(() => {
        if (deleteData.data) {
            const { item, order } = deleteData.data;
            if (item && order) {
                dispatch(redirectTo("/"))
            };
            if (item && !order) {
                dispatch(redirectTo("/order/" + deleteData.orderNumber))
            }
        }
    }, [deleteData.data])

    const _setDeleteItem = useCallback((itemNumber: string | null) => {
        dispatch(setDeleteItemNumber(itemNumber))
    }, []);

    const deleteItem = useCallback(() => {
        dispatch(DeleteItem.request())
    }, [])

    return ({
        itemToDelete: deleteData.itemNumber,
        deleteItem,
        setDeleteItem: _setDeleteItem,
        loading: deleteData.loading
    })

}