"use client";
import { interFont, RobotoFont } from "@/app/font/font-export";
import { cn } from "@/lib/utils";

import { VscLayoutSidebarRight } from "react-icons/vsc";
import { AiFillRobot } from "react-icons/ai";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowUp, SlidersHorizontal } from "lucide-react";
const CopilotComponent = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="w-full border-b-1 border-neutral-300 h-16 h-16px flex justify-between">
        <div
          className={cn(
            "flex items-center gap-x-4 ml-6 font-bold",
            interFont.className
          )}
        >
          <div className="flex gap-x-1 items-center">
            <AiFillRobot className="text-blue-500" />
            <span className="bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600 bg-clip-text text-transparent  ">
              AI Copilot
            </span>
          </div>
          <span>Details</span>
        </div>
        <div className="flex items-center gap-x-3 mr-6">
          <Button
            variant="ghost"
            size="icon"
            className={cn("size-7")}
            onClick={() => {
              toggleSidebar();
            }}
          >
            <VscLayoutSidebarRight />
          </Button>
        </div>
      </div>
      <div className={cn("flex-1 p-4 flex flex-col items-center justify-center gap-y-2",RobotoFont.className)}>
        <AiFillRobot className="text-blue-500 text-4xl" />
        <span className="text-xl font-bold">Hi, I&apos;m Fin AI Copilot</span>
        <span className="text-muted-foreground font-medium">Ask Me Anything about this conversation </span>
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
    </div>
  );
};

export default CopilotComponent;
