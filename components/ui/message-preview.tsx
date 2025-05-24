"use client";

import { interFont } from "@/app/font/font-export";
import NameAvatar from "./name-avatar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";




interface MessagePreviewCompoProps{
    name:string;
    message:string;
    time:string;
    chatId:number;
}

const MessagePreviewCompo = ({
    name,
    message,
    time,
    chatId
}:MessagePreviewCompoProps) => {
  
    const router=useRouter();
    return (
    <div className="py-2 cursor-pointer hover:bg-neutral-100 hover:shadow-md rounded-lg transition duration-200"
    onClick={()=>{
        router.push(`/chats/${chatId}`)
    }}
    >
      <div className="w-full h-16  p-2 flex items-center  ">
        <NameAvatar
        id={chatId}
        />
        <div className={cn("flex flex-col ml-3 text-neutral-700",interFont.className)}>
            <span className="font-semibold text-sm ">
                {name}
            </span>
            <div className="text-sm flex gap-x-16 font-medium">  
                <span>
                    {message.length > 20 ? `${message.slice(0, 20)}...` : message}
                </span>
                <span>
                    {time}
                </span>
            </div>
        </div>
      </div>
     
    </div>
  )
};

export default MessagePreviewCompo;
