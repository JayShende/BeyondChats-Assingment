import { GiNightSleep } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiArrowDownOnSquareStack } from "react-icons/hi2";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

const ChatsHeader = () => {
  return (
    <div className="flex gap-x-2 mr-4">
      <Tooltip>
        <TooltipTrigger>
          <Button variant="ghost" size="lg" className="cursor-pointer ">
            <MdOutlineStarPurple500 className="fill-amber-300 " />
            {/* change star based upon weather marked as imp or not */}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Mark Priority</p>
        </TooltipContent>
      </Tooltip>
      <Button variant="secondary" className="cursor-pointer">
        <HiDotsHorizontal />
      </Button>

      <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 px-2 py-1 ">
        <svg
          className="interface-icon o__standard o__standard__ticket o__by-text"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 8.5C13.5 7.67 14.17 7 15 7V3.7C15 3.31 14.69 3 14.3 3H1.7C1.31 3 1 3.31 1 3.7V7C1.83 7 2.5 7.67 2.5 8.5C2.5 9.33 1.83 10 1 10V13.3C1 13.69 1.31 14 1.7 14H14.3C14.69 14 15 13.69 15 13.3V10C14.17 10 13.5 9.33 13.5 8.5ZM11 9H5V7.3H11V9Z"></path>
        </svg>
      </div>
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
      <Tooltip>
        <TooltipTrigger>
          <Button className="cursor-pointer" variant="secondary">
            <SidebarTrigger className="cursor-pointer" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex gap-x-1 items-center">
            <span>
                Open Right Menu
            </span>
            <span className="font-mono bg-secondary p-1 rounded-sm">
                ctrl + b
            </span>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ChatsHeader;
