"use client";
import { interFont } from "@/app/font/font-export";
import { cn } from "@/lib/utils";

import { VscLayoutSidebarRight } from "react-icons/vsc";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
const CopilotComponent = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-full h-full">
      <div className="w-full border-b-1 border-neutral-300 h-16 h-16px flex justify-between">
        <div
          className={cn(
            "flex items-center gap-x-4 ml-6 font-bold",
            interFont.className
          )}
        >
          <span className="bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600 bg-clip-text text-transparent  ">
            AI Copilot
          </span>
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
    </div>
  );
};

export default CopilotComponent;
