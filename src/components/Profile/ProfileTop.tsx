import { useAuth } from "../../hooks/useAuth"
import Image from "../Image";
import { Card, Container, Typography } from "../ui"
import Icon from "../ui/Icon";
import React from "react";
import styled from "styled-components/macro";


const EditButton = styled.a`
    position: absolute;
    right: 16px;
    bottom: 16px;
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.icon.secondary};
    &:hover {
        cursor: pointer;
    }
    
    svg {
        fill: currentColor;
    }
`;


const ProfileTop = () => {

    const { user } = useAuth();

    return (
        <Card fullWidth padding={28}>
            {user &&
                <Container.Grid alignItems="center" justify="start" rows="1fr" cols="60px auto" gap={28}>
                    {!!user.image && <Image src={user.image} width="60px" height="60px" styles={{borderRadius: "50%"}}/>}
                    {!user.image && <Icon name="user" styles={{
                        width: "60px",
                        height: "60px",
                    }} />}

                    <Container.Flex alignItems="start">
                        <Typography.Small>С возвращением</Typography.Small>
                        <Typography.Title start styles={{margin: "4px 0 0"}}>{user.userName ?? "Неизвестный Человек"}</Typography.Title>
                    </Container.Flex>
                    <EditButton href="/edit">
                        <Icon name="edit"/>
                    </EditButton>
                </Container.Grid>
            }
        </Card>
    )
}

export default ProfileTop