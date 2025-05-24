import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessageInterface } from "../types/message-interface";
import { sendMessage } from "./api";


export function useSendMessageBack(){
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:(data:sendMessageInterface)=>sendMessage(data),
         onMutate:()=>{
            console.log("Mutatted");
        },
        onSuccess:()=>{
            console.log("Successfull");
        },

        onSettled:async(_,error)=>{
            if(error){
                console.log("Error in Muatation");
            }

            await queryClient.invalidateQueries({
                queryKey:["sent Messages"]
            })
        }
    })
}