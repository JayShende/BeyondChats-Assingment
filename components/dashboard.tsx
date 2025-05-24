"use client";

import { cn } from "@/lib/utils";
import MessagePreviewCompo from "./ui/message-preview";
import { FaChevronDown } from "react-icons/fa";
import { interFont, RobotoFont } from "@/app/font/font-export";
import { FaBookOpen } from "react-icons/fa";
import { Button } from "./ui/button";
import { useGetAllChats } from "@/app/services/queries";
import { messagesLHSPane } from "@/app/types/message-interface";
import LhsPane from "./lhs-pane";

const DashBoardMain = () => {
  const getAllChatsLHS = useGetAllChats();
 
  if (getAllChatsLHS.isPending) {
    return <div>Loading</div>;
  }
  if (getAllChatsLHS.isError) {
    return <div>Some Error</div>;
  }
  return (
    <div className="bg-[#eff0eb] w-full h-full flex ">
      <LhsPane/>
      <div className="w-full bg-white my-4 mr-4  rounded-2xl flex flex-col items-center justify-center gap-y-3 ">
        <img
          src="https://static.intercomassets.com/ember/assets/images/inbox2/channels/empty-state-channels-banner-310d260ac0628d05716f8039ee9693e4.png"
          alt="lhs image"
          className="w-[350px] h-auto"
        />
        <span className={cn("font-bold", interFont.className)}>
          Set up channels to connect with your customers
        </span>
        <p className={cn("w-[350px] text-center", RobotoFont.className)}>
          Manage conversations across channels from your Inbox. Set up
          Messenger, email, phone, WhatsApp, SMS, or social.
        </p>
        <div className="flex gap-x-2">
          <Button className="rounded-2xl"> Set up channels</Button>
          <Button variant="secondary">
            <FaBookOpen /> Channels Explained
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardMain;
