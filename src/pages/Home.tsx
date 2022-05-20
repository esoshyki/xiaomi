import React from "react";
import Offer from "../components/Offer";
import { withLayout } from "../components/Layout/withLayout";
import { Button, Container } from "../components/ui";

const Home = () => {
    return (
        <Container.Flex justify="center" fullHeight fullWidth styles={{
            minHeight: "calc(100vh - 200px)"
        }}>
            <Button link="/create">Создать предложение</Button>
        </Container.Flex>
    );
};

export default withLayout(Home, "Главная");
