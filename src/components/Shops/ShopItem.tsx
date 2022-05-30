import { Container, Typography } from "../ui";
import React from "react";
import { useTheme } from "styled-components/macro";
import Image from "../ui/Image";
import styled from "styled-components";

const Link = styled.a`
    text-decoration: none;
    
    &::before {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        content: '';
    }
`

const ShopItem = (props: {data: {logo: string, name: string, title?: string, description?: string, url: string, rgb: string}}) => {
    const {logo, name, title, description, url, rgb} = props.data;
    const theme = useTheme();

    return (
        <Container.Flex alignItems="stretch" verticalGap={8} padding={"24px 28px 18px"} styles={{
            position: "relative",
            backgroundColor: `rgba(${rgb}, 0.4)`,
            backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0.8) 30.13%, rgba(${rgb}, 0) 100%);`,
            boxShadow: "0 0 25px rgba(0, 0, 0, 0.04)",
            backdropFilter: "blur(8px)",
            borderRadius: "20px",
        }}>
            <Container.Flex direction="row" horizontalGap={12} padding="0 0 12px">
                <Image src={logo} width={36} height={36} alt={name}/>
                <Link href={url} target="_blank">
                    <Typography.Small
                        margin={0}
                        styles={{textTransform: "uppercase", color: theme.colors.text.contrast}}
                    >
                        {name}
                    </Typography.Small>
                </Link>
            </Container.Flex>
            {title &&
            <Typography.Title textAlign="start" margin={0} styles={{color: theme.colors.text.contrast}}>
                {title}
            </Typography.Title>
            }
            {description &&
            <Typography.Small textAlign="start" styles={{color: theme.colors.text.contrast}}>
                {description}
            </Typography.Small>
            }

        </Container.Flex>
    )
}

export default ShopItem