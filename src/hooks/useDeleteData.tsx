import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeleteData, toggleDelete } from "../store/viewSlice";

export default function useDeleteData () {
    
    const dispatch = useDispatch();
    
    const showDelete = useSelector(getDeleteData);

    const _toggleDeleteOverlay = useCallback(() => {
        dispatch(toggleDelete())
    }, [showDelete])

    return ({
        showDelete,
        toggleDelete: _toggleDeleteOverlay
    })

}