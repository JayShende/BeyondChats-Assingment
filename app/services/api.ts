
import axios from "axios"
import { sendMessageInterface } from "../types/message-interface"

//  the below is the chats in the lhs pane
export const getAllChats=async()=>{

    const response=await axios({
        method:"get",
        url:"/api/getAllChats"
    })
    return response.data
}

//  to send the message to the db
export const sendMessage=async(data:sendMessageInterface)=>{

    const response=await axios({
        method:"post",
        url:"/api/sendMessage",
        data:data
    })
    return response.data
}

// gets all the sent messages to an chat id
export const getSentMessage=async(chatId:number)=>{
    
    const response=await axios({
        method:"post",
        url:"/api/get-sentMessage",
        data:{
            chatId:chatId
        }
    })
    return response.data
}


// the below endpoint fetches the user chat according to the chatId
export const getChatMessages=async(chatId:number)=>{

    const response=await axios({
        method:"post",
        url:"/api/get-userChats",
        data:{
            chatId:chatId
        }
    })
    return response.data
}