import { ComponentType, ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setUser } from "../store/userSlice";
import { User } from "../store/userSlice/types";

export const withAuth =
    <T extends object>(Component: ComponentType<T>) =>
    (props: T): ReactElement => {

        const dispatch = useDispatch()

        const { user, checkAuth } = useSelector(getUserData);

        

        return (
                <Component {...props} />
        );
    };
