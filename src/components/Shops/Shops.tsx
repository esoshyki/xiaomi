import { Box, Container, Typography } from "../ui";
import React, { useState } from "react";
import { useTheme } from "styled-components/macro";
import Input from "../ui/Input";
import Icon from "../ui/Icon";
import ShopItem from "./ShopItem";

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

const Shops = (props: {data: { logo: string; name: string; title: string; description: string; url: string; rgb: string }[]}) => {
    return (
        <Container.Flex gap={16} alignItems="stretch">
            <Container.Flex direction="row" wrapped verticalGap={12} alignItems="baseline" justify="between">
                <Typography.Title margin={0} padding={"0 0 0 4px"}>Магазины-партнёры</Typography.Title>
                <Typography.Link href="">Фильтры</Typography.Link>
                <Search />
            </Container.Flex>
            {props.data.map((item, index) => {
                return <ShopItem data={item} key={index}/>
            })}
        </Container.Flex>
    )

};

export default Shops