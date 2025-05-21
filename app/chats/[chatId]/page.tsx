import SendMessage from "@/components/send-message";

import ChatList from "@/components/ui/message-chat";
import MessagePreviewCompo from "@/components/ui/message-preview";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { sampleMessages } from "@/sampleMessage";
import { Inter } from "next/font/google";

import { FaChevronDown } from "react-icons/fa";

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ChatsPage = async ({
  params,
}: {
  params: Promise<{ chatId: number }>;
}) => {
  const chatId = (await params).chatId;
  const chatObj = sampleMessages.find((obj) => {
    if (obj.id == chatId) {
      return obj;
    }
  });
  const name = chatObj?.name;
  const chatMsg = chatObj?.message;
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
          {sampleMessages.map((card) => (
            <MessagePreviewCompo
              key={card.id}
              name={card.name}
              message={card.message}
              time={card.time}
              active={chatId}
              chatId={card.id}
            />
          ))}
        </div>
      </div>
      <div className=" bg-white my-4 mr-4  rounded-2xl flex flex-col justify-between  p-2">
        <div>
          <div className="border-b-1 border-neutral-300 h-16 flex items-center w-full justify-between">
            <span
              className={cn(
                "font-semibold text-2xl ml-10",
                interFont.className
              )}
            >
              {name}
            </span>
             <SidebarTrigger className="mr-10" />
          </div>
          <div className="px-6">
            <ChatList message={chatMsg} name={name} />
          </div>
        </div>
       <SendMessage/>
      </div>
    </div>
  );
};

export default ChatsPage;
