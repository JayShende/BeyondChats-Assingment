"use client";

import { interFont } from "@/app/font/font-export";
import { useGetAllChats, useGetChatMessages } from "@/app/services/queries";
import { messagesLHSPane } from "@/app/types/message-interface";
import ChatsHeader from "@/components/chats-header";
import SendMessage from "@/components/send-message";

import ChatList from "@/components/ui/message-chat";
import MessagePreviewCompo from "@/components/ui/message-preview";

import { cn } from "@/lib/utils";

import { FaChevronDown } from "react-icons/fa";
import SentMessageDisplay from "./sent-message-display";

interface DataComponentProps {
  chatId: number;
}

const DataComponent = ({ chatId }: DataComponentProps) => {
  const getMessageFromServer = useGetChatMessages(chatId);
  const getAllChatsLHS = useGetAllChats();
  if (getMessageFromServer.isLoading) {
    return <div>Loading</div>;
  }
  if (getMessageFromServer.isError) {
    return <div>Error</div>;
  }

  if (getAllChatsLHS.isPending) {
    return <div>Loading</div>;
  }
  if (getAllChatsLHS.isError) {
    return <div>Some Error</div>;
  }
  return (
    <div className="bg-[#eff0eb] grid grid-cols-[350px_1fr] h-screen gap-2">
      <div className=" bg-[#fafaf7] m-4 rounded-2xl  overflow-y-scroll">
        <div className="border-b-1 border-neutral-300 h-16 flex items-center">
          <span
            className={cn("font-semibold text-2xl ml-6", interFont.className)}
          >
            Your inbox
          </span>
        </div>
        <div
          className={cn(
            "font-semibold text-sm flex justify-between m-2",
            interFont.className
          )}
        >
          <span className="flex items-center gap-x-2 cursor-pointer hover:bg-neutral-300 p-1 rounded-md transition duration-200">
            3 Open
            <FaChevronDown />
          </span>
          <span className="flex items-center gap-x-2 cursor-pointer hover:bg-neutral-300 p-1 rounded-md transition duration-200">
            Waiting Longest
            <FaChevronDown />
          </span>
        </div>
        <div className="flex flex-col gap-y-3  ">
          {getAllChatsLHS.data.map((card: messagesLHSPane) => (
            <MessagePreviewCompo
              key={card.id}
              name={card.name}
              message={card.message}
              time={card.lastMsg}
              chatId={card.id}
            />
          ))}
        </div>
      </div>
      <div className=" bg-white my-4 mr-4  rounded-2xl flex flex-col p-2">
        <div className="border-b-1 border-neutral-300 h-16 flex items-center w-full justify-between">
          <span
            className={cn("font-semibold text-2xl ml-10", interFont.className)}
          >
            {getMessageFromServer.data.name}
          </span>
          <ChatsHeader />
        </div>
        <div className="px-6 flex-1 overflow-y-auto">
          <ChatList message={getMessageFromServer.data.message} id={chatId} />
         <SentMessageDisplay chatId={chatId}/>

        </div>

        <SendMessage chatId={chatId} />
      </div>
    </div>
  );
};

export default DataComponent;
