import { useEffect, useMemo, useRef, useState } from "react";
import { styled } from "../../helpers/styled";
import useChat, { ChatMessage as ChatMessageProps } from "../../hooks/useChat";
import { Card, Container, Typography } from "../ui";
import ChatMessage from "./Message";

const ChatWrapper = styled.div`
    position: relative;
    height: 506px;
    width: 100%;
    margin: 0 auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track {
        ${(props) => props.theme.colors.scrollBar.background}
    }
    &::-webkit-scrollbar-thumb {
        ${(props) => props.theme.colors.scrollBar.slider}
    }
`;

const ChatContent = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
`;

const ChatComponent = () => {
    const intervalRef = useRef<ReturnType<typeof setInterval>>();

    const [messages, setMessages] = useState<ChatMessageProps[]>();

    const { getMessages } = useChat();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setMessages(getMessages());
        }, 5000);

        return () => {
            intervalRef.current && clearInterval(intervalRef.current);
        };
    }, []);

    const sortedMessages = useMemo(() => {
        return messages
            ? messages.sort(
                  (cur, next) => cur.date.getTime() - next.date.getTime()
              )
            : [];
    }, [messages]);

    return (
        <Card styles={{ margin: "auto" }} padding={20}>
            <Typography.Title>Пример чата</Typography.Title>
            <ChatWrapper>
                <ChatContent>
                    <Container.Flex verticalGap={8}>
                        {sortedMessages.map((el, key) => (
                            <ChatMessage {...el} key={key} />
                        ))}
                    </Container.Flex>
                </ChatContent>
            </ChatWrapper>
        </Card>
    );
};

export default ChatComponent;
