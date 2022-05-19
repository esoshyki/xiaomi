import { useTheme } from "styled-components";
import { styled } from "../../helpers/styled";
import {
    messageStatuses,
    ChatMessage as ChatMessageProps,
} from "../../hooks/useChat";
import { Container, Typography } from "../ui";
import { formatDate } from "./helpers/formatData";

const UserMessageWrapper = styled.div<{ incoming: boolean }>`
    position: relative;
    width: 228px;
    align-self: ${(props) => (props.incoming ? "end" : "start")};
    background-color: ${(props) =>
        props.incoming
            ? props.theme.colors.message.adminColor
            : props.theme.colors.message.userColor};
`;

const ChatMessage = (
    props: ChatMessageProps & { incoming: boolean }
) => {
    const { text, date, status, incoming } = props;

    const theme = useTheme();

    return (
        <Container.Flex fullWidth>
            <UserMessageWrapper incoming={incoming}>
                <Typography.Main>{text}</Typography.Main>
            </UserMessageWrapper>
            <Typography.Micro color={theme.colors.text.default}>
                {formatDate(date)}
            </Typography.Micro>
            {status && (
                <Typography.Micro color={theme.colors.text.tertiary}>
                    {messageStatuses[status]}
                </Typography.Micro>
            )}
        </Container.Flex>
    );
};

export default ChatMessage
