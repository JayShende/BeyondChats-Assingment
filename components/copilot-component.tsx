"use client";
import { interFont } from "@/app/font/font-export";
import { cn } from "@/lib/utils";
import { IoMdSettings } from "react-icons/io";
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { useSidebar } from "./ui/sidebar";
const CopilotComponent = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-full h-full">
      <div className="w-full border-b-1 border-neutral-300 h-16 h-16px flex justify-between">
        <div
          className={cn(
            "flex items-center gap-x-4 ml-6 font-medium",
            interFont.className
          )}
        >
          <span>Details</span>
          <span>Copilot</span>
        </div>
        <div className="flex items-center gap-x-3 mr-6">
          <IoMdSettings />
          <VscLayoutSidebarRight
            onClick={() => {
              toggleSidebar();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CopilotComponent;
