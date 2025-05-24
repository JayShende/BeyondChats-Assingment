
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { cn } from "@/lib/utils";
import { interFont, RobotoFont } from "@/app/font/font-export";
import { FaBookOpen } from "react-icons/fa";
import { BsFillTicketFill } from "react-icons/bs";
export function HoverCardChatsHeader() {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <div className="hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 px-2 py-1 ">
         <BsFillTicketFill />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex flex-col gap-y-2">
          <img
            src="https://static.intercomassets.com/ember/assets/images/inbox2/tickets/customer-ticket-tooltip@2x-a9588553c010c3abbed5deaae34c6691.png"
            alt="hover card image"
            className="w-full h-auto rounded-xl"
          />
          <span className={cn("font-semibold ",interFont.className)}>Convert to Customer Ticket</span>
          <p className={cn("text-sm",RobotoFont.className)}>Collect all the info You need, track progress, keep customers up to date in real time. You can change your settings whenever you like </p>
          <div className="flex gap-x-2 items-center">
           <FaBookOpen />
           <span>Learn More</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
