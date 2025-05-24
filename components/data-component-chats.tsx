"use client";

import { interFont } from "@/app/font/font-export";
import { cn } from "@/lib/utils";

import {useGetChatMessages } from "@/app/services/queries";

import ChatsHeader from "@/components/chats-header";
import SendMessage from "@/components/send-message";
import ChatList from "@/components/ui/message-chat";
import SentMessageDisplay from "./sent-message-display";
import { useRouter } from "next/navigation";
import LhsPane from "./lhs-pane";
import SkeletonChatsName from "./Skeleton/chats-name";

import { FaChevronLeft } from "react-icons/fa";


interface DataComponentProps {
  chatId: number;
}

const DataComponent = ({ chatId }: DataComponentProps) => {
  const getMessageFromServer = useGetChatMessages(chatId);

  const router=useRouter();

  if (getMessageFromServer.isError) {
    return <div>Error</div>;
  }


  return (
    <div className="bg-[#eff0eb] grid sm:grid-cols-[350px_1fr] grid-cols-1 h-screen gap-2">
      <div className=" bg-[#fafaf7] m-4 rounded-2xl  overflow-y-scroll hidden sm:block">
        <LhsPane/>
      </div>


      <div className=" bg-white sm:my-4 my-1 sm:mr-4 mr-0  rounded-2xl flex flex-col p-2">
        
        <div className="border-b-1 border-neutral-300 sm:h-16 h-12 flex items-center w-full justify-between">

          <div className="flex items-center gap-x-1">

                <span className="block sm:hidden"
                onClick={()=>{
                  router.push("/home")
                }}
                >
                    <FaChevronLeft />
                </span>

                {getMessageFromServer.isPending ? <SkeletonChatsName/> : <span className={cn("font-semibold sm:text-2xl text-xl sm:ml-10 ml-3", interFont.className)}>
                  {getMessageFromServer.data.name}
                </span>}

          </div>

          <ChatsHeader />
          
        </div>

        <div className="sm:px-6 px-0 flex-1 overflow-y-auto">
         { getMessageFromServer.isPending ? <></>: <ChatList message={getMessageFromServer.data.message} id={chatId} />}
         <SentMessageDisplay chatId={chatId}/>

        </div>

        <SendMessage chatId={chatId} />
      </div>
    </div>
  );
};

export default DataComponent;
