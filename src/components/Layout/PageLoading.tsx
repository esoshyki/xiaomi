import styled from "styled-components"
import Container from "../ui/Container"
import Icon from "../ui/Icon";

const LoadingIcon = styled.div`
    width: 100px;
    height: 100px;
`;

const PageLoading = () => {

    return (
        <Container.Flex fullHeight fullWidth justify="center">
            <LoadingIcon>
                <Icon name="loading" styles={{width: "100%", height: "100%"}} />
            </LoadingIcon>
        </Container.Flex>
    )
}

export default PageLoading