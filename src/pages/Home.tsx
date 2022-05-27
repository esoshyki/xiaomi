import React, { useState } from "react";
import { withLayout } from "../components/Layout/withLayout";
import { Button, Card, Container, Image, Typography } from "../components/ui";
import step1 from "../assets/step_1.png";
import step2 from "../assets/step_2.png";
import step3 from "../assets/step_3.png";
import MainSlider from "../components/ui/MainSlider";
import { useDispatch } from "react-redux";
import { setSlide } from "../store/viewSlice";

const slidesData = [
    {
        img: step1,
        title: "Куда деть старый смартфон?",
        text: "Быстро и выгодно обменяйте ваше старое устройство на новый товар или получите за него деньги"
    },
    {
        img: step2,
        title: "Оцените ваш смартфон из дома",
        text: "Легко оцените ваш смартфон, ответив на несколько простых вопросов. Мы 100% гарантируем самую высокую оценку"
    },
    {
        img: step3,
        title: "Выберите магазин-партнёр рядом",
        text: "Выберите партнёра у которого есть то, на что вы хотите поменять ваше устройство. Его примут по оценённой стоимости"
    }
];

const Home = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Container.Flex
                alignItems="stretch"
                justify="start"
                fullHeight
                fullWidth
                styles={{paddingBottom: "24px"}}
                breakpoints={{
                    660: {
                        justifyContent: "space-between"
                    }
                }}
            >
                <MainSlider slides={slidesData} />
                <Card
                    padding="28px"
                    margin="84px auto 0"
                    fullWidth
                    styles={{
                        maxWidth: "none",
                        width: "auto",
                        position: "sticky",
                        bottom: "36px"
                    }}
                    breakpoints={{
                    660: {
                        marginTop: "24px",
                        maxWidth: "344px",
                        bottom: "24px"
                    }
                }}>
                    <Container.Flex
                        gap={16}
                        direction="row"
                        alignItems="stretch"
                        justify="center"
                        styles={{}}
                        breakpoints={{
                            660: {
                                flexDirection: "column"
                            }
                        }}
                    >
                        <Button link="/" styles={{textTransform: "uppercase", minWidth: "256px"}} variant="outline">Магазины-партнеры</Button>
                        <Button link="/create" styles={{textTransform: "uppercase", minWidth: "256px"}} onClick={() => { dispatch(setSlide(0));}}>Оценить устройство</Button>
                    </Container.Flex>

                </Card>

            </Container.Flex>
        </>
    );
};

export default withLayout(Home, "Главная");
