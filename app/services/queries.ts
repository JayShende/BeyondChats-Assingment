import { useQuery } from "@tanstack/react-query";
import { getAllChats, getChatMessages, getSentMessage } from "./api";


export function useGetAllChats(){

    return useQuery({
        queryKey:["lhs pane chats"],
        queryFn:getAllChats,
    })
}

export function useGetSentMessage(chatId:number){
    return useQuery({
        queryKey:["sent Messages",chatId],
        queryFn:()=>getSentMessage(chatId),
        enabled: !!chatId
    })
}

export function useGetChatMessages(chatId: number) {
    return useQuery({
        queryKey: ["rhs pane msg", chatId],
        queryFn: () => getChatMessages(chatId),
        enabled: !!chatId, // Only runs if chatId is truthy
    });
}