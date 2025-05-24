
"use client";

import { cn } from "@/lib/utils";
import MessagePreviewCompo from "./ui/message-preview";
import { FaChevronDown } from "react-icons/fa";
import { interFont } from "@/app/font/font-export";

import { useGetAllChats } from "@/app/services/queries";
import { messagesLHSPane } from "@/app/types/message-interface";
const LhsPane = () => {

const getAllChatsLHS = useGetAllChats();
 
  if (getAllChatsLHS.isPending) {
    return <div>Loading</div>;
  }
  if (getAllChatsLHS.isError) {
    return <div>Some Error</div>;
  }
    return (
    <div className="w-[30%] bg-[#fafaf7] m-4 rounded-2xl  overflow-y-scroll">
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
  )
};

export default LhsPane;
