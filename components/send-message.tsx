"use client";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Separator } from "./ui/separator";
import { FaBookmark } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { Input } from "./ui/input";
import { useRef } from "react";

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const SendMessage = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
    }
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <div className="flex gap-x-2 p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-fit my-1 rounded-lg flex-col justify-between ">
          <div className="flex gap-x-2 items-center hover:text-red-500 cursor-pointer w-fit">
            <BsChatLeftTextFill />
            <span className={cn("font-medium ", interFont.className)}>
              Chat
            </span>
            <FaChevronDown className="text-sm" />
          </div>
          <div className="my-4 text-wrap">
            <textarea
              placeholder="Use CtrlK for Shortcuts"
             className="w-full border-0 outline-0 py-2 resize-none overflow-y-auto max-h-[200px] break-words"
              rows={2}
              ref={textareaRef}
              onInput={autoResize}
            />
          </div>
          <div>
            <div className="flex gap-x-4">
              <Tooltip>
                <TooltipTrigger>
                  <BsFillLightningChargeFill />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show Shortcuts</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <FaBookmark />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Use Macros</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <FaFaceSmile />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Insert Emoji</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SendMessage;
