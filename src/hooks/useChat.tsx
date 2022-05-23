import { useEffect, useRef, useState } from "react";
import { useMemo } from "react";

export type ChatMessage = {
    text: string
    date: Date
    incoming: boolean
    status?: keyof typeof messageStatuses
}

export const messageStatuses = {
    has_been_read: "Прочитано",
    not_read: "Не прочитано"
}

export default function useChat () {

    const getMessages = () => {
        const incomingMessages: ChatMessage[] = [
            {
                text: "Здравствуйте",
                date: new Date('2022-05-18T03:24:00'),
                incoming: true
            },
            {
                text: "При просмотре фото, был замечен скол на экране, в связи с чем, была произведена переоценка",
                date: new Date('2022-05-18T03:24:00'),
                incoming: true        
            }
        ];
    
        const userMessages: ChatMessage[] = [
            {
                text: "Понял, спасибо!",
                incoming: false,
                date: new Date(),
                status: "has_been_read"
            }
        ]

        return [...incomingMessages, ...userMessages]
    }

    return ({
        getMessages,
    })
}