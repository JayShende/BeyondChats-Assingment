"use client";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { useEffect, useRef, useState } from "react";
import { interFont, RobotoFont } from "@/app/font/font-export";
import EmojiPicker from "emoji-picker-react";

const SendMessage = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [msgLength, setMsgLength] = useState(0);
  const [msg, setMsg] = useState("");
  const [btnClass, setBtnClass] = useState("text-neutral-400");
  const [showTooltip, setshowTooltip] = useState(false);
  const[emojiPicker,setemojiPicker]=useState(false)


  const handleEmojiCLick=(emoji)=>{
    setMsg((prevMsg)=>prevMsg+emoji.emoji);
    setemojiPicker(false);
  }

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    const numofChar = msg.length;
    if (numofChar != 0) {
      setBtnClass("bg-black text-white");
      setshowTooltip(true);
    }
    if (numofChar == 0) {
      setBtnClass("text-neutral-400");
      setshowTooltip(false);
    }
    setMsgLength(numofChar);
  }, [msg]);

  const sendButton = (
    <button
      className={`p-2 rounded-2xl w-24 flex items-center justify-center gap-x-2 ${btnClass}`}
    >
      <span className="font-medium">Send</span>
      <FaChevronDown className="text-sm" />
    </button>
  );

  return (
    <>
      { emojiPicker&& <div className="fixed bottom-51 left-91 z-50">
        <EmojiPicker width={650} height={350} onEmojiClick={handleEmojiCLick} />
      </div>}
      <TooltipProvider>
        <Tooltip>
          <div className=" relative flex gap-x-2 p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto  my-1 rounded-lg flex-col justify-between ">
            <div className="flex gap-x-2 items-center hover:text-red-500 cursor-pointer w-fit">
              <BsChatLeftTextFill />
              <span className={cn("font-medium ", interFont.className)}>
                Chat
              </span>
              <FaChevronDown className="text-sm" />
            </div>

            <div className="mt-1 text-wrap">
              <textarea
                placeholder="Use CtrlK for Shortcuts"
                className={cn(
                  "w-full border-0 outline-0 py-0 resize-none overflow-y-auto max-h-[200px]  break-words p-0 font-medium ",
                  RobotoFont.className
                )}
                rows={2}
                ref={textareaRef}
                onInput={autoResize}
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
              />
              {msgLength == 0 ? (
                <span className=" inline-block opacity-0">Char USed</span>
              ) : (
                <span className="text-neutral-400 font-medium text-sm">
                  {msgLength} Characters Used
                </span>
              )}
            </div>
            <div className="flex justify-between">
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
                    <FaFaceSmile onClick={()=>{
                      setemojiPicker(!emojiPicker)
                    }} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Insert Emoji</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <TooltipProvider>
                  {showTooltip ? (
                    <Tooltip>
                      <TooltipTrigger asChild>{sendButton}</TooltipTrigger>
                      <TooltipContent>
                        <p>Send Message</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    sendButton
                  )}
                </TooltipProvider>
              </div>
            </div>
          </div>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default SendMessage;
