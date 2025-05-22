import { cn } from "@/lib/utils";
import MessagePreviewCompo from "./ui/message-preview";
import { FaChevronDown } from "react-icons/fa";
import { sampleMessages } from "@/sampleMessage";
import { interFont, RobotoFont } from "@/app/font/font-export";
import { FaBookOpen } from "react-icons/fa";
import { Button } from "./ui/button";

const DashBoardMain = () => {
  return (
    <div className="bg-[#eff0eb] w-full h-full flex ">
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
          {sampleMessages.map((card) => (
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
      <div className="w-full bg-white my-4 mr-4  rounded-2xl flex flex-col items-center justify-center gap-y-3 ">
        <img
          src="https://static.intercomassets.com/ember/assets/images/inbox2/channels/empty-state-channels-banner-310d260ac0628d05716f8039ee9693e4.png"
          alt="lhs image"
          className="w-[350px] h-auto"
        />
        <span className={cn("font-bold",interFont.className)}>
          Set up channels to connect with your customers
        </span>
        <p className={cn("w-[350px] text-center",RobotoFont.className)}>
          Manage conversations across channels from your Inbox. Set up
          Messenger, email, phone, WhatsApp, SMS, or social.
        </p>
        <div className="flex gap-x-2">
          <Button className="rounded-2xl"> Set up channels</Button>
          <Button variant="secondary"><FaBookOpen /> Channels Explained</Button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardMain;
