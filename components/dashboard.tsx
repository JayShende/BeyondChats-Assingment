"use client";

import { cn } from "@/lib/utils";
import { interFont, RobotoFont } from "@/app/font/font-export";
import { FaBookOpen } from "react-icons/fa";
import { Button } from "./ui/button";
import LhsPane from "./lhs-pane";

const DashBoardMain = () => {

  return (
    <div className="bg-[#eff0eb] w-full h-full flex ">
      <div className="sm:w-[30%] w-full bg-[#fafaf7] m-4 rounded-2xl  overflow-y-scroll"> 
        <LhsPane/>
      </div>
      <div className="w-full bg-white my-4 mr-4  rounded-2xl hidden flex-col items-center justify-center gap-y-3 sm:flex ">
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
