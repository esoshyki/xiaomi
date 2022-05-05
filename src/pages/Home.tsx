import React, { useEffect } from "react"
import Offer from "../components/Offer"
import Container from "../components/ui/Container"
import { withLayout } from "../components/Layout/withLayout"
import { useDispatch } from "react-redux"
import { setStep } from "../store/offerSlice"
import { useAuth } from "../hooks/useAuth"

const Home = () => {

    const dispatch = useDispatch();

    const { isAuth } = useAuth()

    useEffect(() => {
        if (isAuth) {
            dispatch(setStep("questions"))
        }
    }, [isAuth])

    return (
        <Container.Flex fullWidth fullHeight justify="center" styles={{transition: "500ms ease-in"}}>
            <Offer />
        </Container.Flex>
    )
}

export default withLayout(Home, "Главная")