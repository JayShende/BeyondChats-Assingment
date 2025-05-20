import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import MessagePreviewCompo from "./ui/message-preview";
import { FaChevronDown } from "react-icons/fa";
import { sampleMessages } from "@/sampleMessage";


const interFont=Inter({
   subsets: ['latin'], 
  weight: ['400', '600', '700']})




const DashBoardMain = () => {
  return (
    <div className="bg-[#eff0eb] w-full h-full flex ">
      <div className="w-[30%] bg-[#fafaf7] m-4 rounded-2xl  overflow-y-scroll">
        <div className="border-b-1 border-neutral-300 h-16 flex items-center">
            <span className={cn("font-semibold text-2xl ml-6",interFont.className)}>
                Your inbox
            </span>
        </div>
          <div className={cn("font-semibold text-sm flex justify-between m-2",interFont.className)}>
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
            {sampleMessages.map((card)=>(
                <MessagePreviewCompo
                key={card.id}
                name={card.name}
                message={card.message}
                time={card.time}
                chatId={card.id}
                />
            ))}
        </div>
      </div>
      <div className="w-full bg-white my-4 mr-4  rounded-2xl flex items-center justify-center ">
         
        <span className={cn("text-neutral-400 font-medium",interFont.className)}>
            Open an Chat to Start the Conversation
        </span>
      </div>
    </div>
  )
};

export default DashBoardMain;
