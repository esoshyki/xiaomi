import { useDispatch, useSelector } from "react-redux";
import { select } from "../store/selector";
import { hideMenu, showMenu, animationOpen, animationClose, animationClear } from "../store/viewSlice";

export const animateTime = 400;

export const useMenu = () => {
    const dispatch = useDispatch();

    const view = useSelector(select.view);

    const _showMenu = () => {
        dispatch(showMenu());
        dispatch(animationOpen());
        setTimeout(() => {
            dispatch(animationClear());
        }, animateTime)
    };

    const _hideMenu = () => {
        dispatch(animationClose())
        setTimeout(() => {
            dispatch(hideMenu());
            dispatch(animationClear());
        }, animateTime)
    }

    return ({
        hideMenu: _hideMenu,
        showMenu: _showMenu,
        menuIsShown: view.showMenu,
        animationClose : view.animationClose,
        animationOpen : view.animationOpen

    })
};
