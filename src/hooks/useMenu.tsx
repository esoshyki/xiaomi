import { useDispatch, useSelector } from "react-redux";
import { select } from "../store/selector";
import { hideMenu, showMenu } from "../store/viewSlice";

export const useMenu = () => {
    const dispatch = useDispatch();

    const view = useSelector(select.view);

    const _showMenu = () => {
        dispatch(showMenu())
    };

    const _hideMenu = (setHide?: () => void) => {
        setTimeout(() => {
            dispatch(hideMenu());
            setHide && setHide()   
        }, 300)
    }

    return ({
        hideMenu: _hideMenu,
        showMenu: _showMenu,
        menuIsShown: view.showMenu
    })
};
