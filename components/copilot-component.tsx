"use client";
import { interFont, RobotoFont } from "@/app/font/font-export";
import { cn } from "@/lib/utils";

import { VscLayoutSidebarRight } from "react-icons/vsc";
import { RiTeamFill } from "react-icons/ri";
import { AiFillRobot } from "react-icons/ai";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowUp, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { AccordionDetails } from "./accordion-details";
import { IoOpenSharp } from "react-icons/io5";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

const CopilotComponent = () => {
  const { toggleSidebar } = useSidebar();
  const [tab, setTab] = useState("copilot");
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full border-b-1 border-neutral-300 h-16 h-16px flex justify-between">
        <div
          className={cn(
            "flex items-center gap-x-4 ml-6 font-bold",
            interFont.className
          )}
        >
          <Tooltip>
            <TooltipTrigger>
              <div className="flex gap-x-1 items-center">
                <AiFillRobot className="text-blue-500" />
                <span
                  className="bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
                  onClick={() => {
                    setTab("copilot");
                  }}
                >
                  AI Copilot
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copilot</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setTab("details");
                }}
              >
                Details
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Conversation Details</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex items-center gap-x-3 mr-6">
          <Tooltip>
            <TooltipTrigger>
              <IoOpenSharp />
            </TooltipTrigger>
            <TooltipContent>
              <p>Open in new Window</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                size="icon"
                className={cn("size-7 cursor-pointer")}
                onClick={() => {
                  toggleSidebar();
                }}
              >
                <VscLayoutSidebarRight />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hide Right Menu</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      {tab == "copilot" ? (
        <>
          <div
            className={cn(
              "flex-1 p-4 flex flex-col items-center justify-center gap-y-2",
              RobotoFont.className
            )}
          >
            <AiFillRobot className="text-blue-500 text-4xl" />
            <span className="text-xl font-bold">
              Hi, I&apos;m Fin AI Copilot
            </span>
            <span className="text-muted-foreground font-medium">
              Ask Me Anything about this conversation
            </span>
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-2 bg-white border border-input rounded-lg p-1 focus-within:ring-2 focus-within:ring-ring focus-within:border-primary">
              <Input
                type="text"
                placeholder="Ask a question..."
                className="flex-grow border-0 ring-0 outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-2.5"
              />
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              >
                <SlidersHorizontal size={20} />
              </Button>
              <Button variant="default" size="icon" aria-label="Send message">
                <ArrowUp size={20} />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col p-4">
          <div
            className={cn(
              "flex items-center justify-between text-muted-foreground text-sm ",
              RobotoFont.className
            )}
          >
            <span className="ml-6">Assignee</span>
            <div className="flex gap-x-2 mr-8">
              <Image
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="img"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>Brian Byrne</span>
            </div>
          </div>
          <div
            className={cn(
              "flex items-center justify-between text-muted-foreground text-sm mt-3 border-b-1 border-neutral-300 pb-3",
              RobotoFont.className
            )}
          >
            <span className="ml-6">Team</span>
            <div className="flex gap-x-2 mr-8">
              <RiTeamFill className="text-lg" />
              <span>Unassigned</span>
            </div>
          </div>

          <AccordionDetails />
        </div>
      )}
    </div>
  );
};

export default CopilotComponent;
