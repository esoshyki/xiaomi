import React, { useState } from "react";
import { withLayout } from "../components/Layout/withLayout";
import { Box, Container, Typography } from "../components/ui";
import Input from "../components/ui/Input";
import Icon from "../components/ui/Icon";
import { useTheme } from "styled-components/macro";
import logoRostock from "../assets/logo-rostock.svg"
import logoXistore from "../assets/logo-xistore.svg"
import logoA1 from "../assets/logo-a1.svg"

const shopsData = [
    {
        logo: logoRostock,
        name: "Xistore Rostock",
        title: "Обновлённые смартфоны",
        description: "Apple, Xiaomi, Samsung, Honor и другие ",
        rgb: "150, 207, 129"
    },
    {
        logo: logoA1,
        name: "A1",
        title: "Смартфоны, компьютеры",
        description: "Apple, Samsung, Honor и другие",
        rgb: "152, 149, 139"
    },
    {
        logo: logoXistore,
        name: "Xistore",
        title: "Магазин умных устройств",
        description: "Смартфоны, умный дом, носимые гаджеты",
        rgb: "255, 133, 51"
    }
];

const Search = () => {
    const theme = useTheme();
    const [searchText, setSearchText] = useState("");

    return (
        <Box styles={{position: "relative", width: "100%"}}>
            <Input
                type="text"
                value={searchText}
                placeholder="Поиск"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Icon
                name="search"
                styles={{
                    position: "absolute",
                    top: "10px",
                    right: "12px",
                    fill: theme.colors.icon.secondary
                }}
            />
        </Box>
    )
}

const ShopItem = (props: {logo: string, name: string, title: string, description: string, rgb: string}) => {
    const {logo, name, title, description, rgb} = props;

    return (
        <Container.Flex alignItems="stretch" verticalGap={8} padding={"24px 28px 18px"} styles={{
            backgroundColor: `rgba(${rgb}, 0.4)`,
            backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0.8) 30.13%, rgba(${rgb}, 0) 100%);`,
            boxShadow: "0 0 25px rgba(0, 0, 0, 0.04)",
            backdropFilter: "blur(8px)",
            borderRadius: "20px",
        }}>
            <Container.Flex direction="row"></Container.Flex>
        </Container.Flex>
    )
}

const Shops = () => {
    return (
        <Container.Flex gap={16} alignItems="stretch">
            <Container.Flex direction="row" wrapped verticalGap={12} alignItems="baseline" justify="between">
                <Typography.Title margin={0} padding={"0 0 0 4px"}>Магазины-партнёры</Typography.Title>
                <Typography.Link href="">Фильтры</Typography.Link>
                <Search />
            </Container.Flex>
        </Container.Flex>
    );
};

export default withLayout(Shops, "Магазины-партнёры");
