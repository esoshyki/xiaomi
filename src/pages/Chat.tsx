import React from "react"
import { withLayout } from "../components/Layout/withLayout"
import { Chat } from "../components"

const ChatPage = () => {

    return (
        <Chat />
    )
}

export default withLayout(ChatPage, "Переписка с поддержной")