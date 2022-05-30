import React from "react";
import { withLayout } from "../components/Layout/withLayout";
import logoRostock from "../assets/logo-rostock.svg"
import logoXistore from "../assets/logo-xistore.svg"
import logoA1 from "../assets/logo-a1.svg"
import Shops from "../components/Shops"

const shopsData = [
    {
        logo: logoRostock,
        name: "Xistore Rostock",
        title: "Обновлённые смартфоны",
        description: "Apple, Xiaomi, Samsung, Honor и другие ",
        url: "https://rostock.xistore.by/",
        rgb: "150, 207, 129"
    },
    {
        logo: logoA1,
        name: "A1",
        title: "Смартфоны, компьютеры",
        description: "Apple, Samsung, Honor и другие",
        url: "https://www.a1.by/",
        rgb: "152, 149, 139"
    },
    {
        logo: logoXistore,
        name: "Xistore",
        title: "Магазин умных устройств",
        description: "Смартфоны, умный дом, носимые гаджеты",
        url: "https://xistore.by/",
        rgb: "255, 133, 51"
    }
];

const ShopsPage = () => {
    return (
        <Shops data={shopsData}/>
    );
};

export default withLayout(ShopsPage, "Магазины-партнёры");
