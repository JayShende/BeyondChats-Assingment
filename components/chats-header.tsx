import { GiNightSleep } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiArrowDownOnSquareStack } from "react-icons/hi2";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { HoverCardChatsHeader } from "./ui/hover-card-chats-header";

const ChatsHeader = () => {
  return (
    <div className="flex gap-x-2 mr-4">
      <Tooltip>
        <TooltipTrigger>
          <MdOutlineStarPurple500 className="fill-amber-300 " />
          {/* change star based upon weather marked as imp or not */}
        </TooltipTrigger>
        <TooltipContent>
          <p>Mark Priority</p>
        </TooltipContent>
      </Tooltip>
      <Button variant="secondary" className="cursor-pointer">
        <HiDotsHorizontal />
      </Button>
      <HoverCardChatsHeader />
      <Button variant="secondary" className="cursor-pointer">
        <IoCall />
        Call
      </Button>
      <Button variant="secondary" className="cursor-pointer">
        <GiNightSleep />
        Snooze
      </Button>
      <Button className="cursor-pointer">
        <HiArrowDownOnSquareStack />
        Close
      </Button>

      <SidebarTrigger className="cursor-pointer" />
    </div>
  );
};

export default ChatsHeader;
