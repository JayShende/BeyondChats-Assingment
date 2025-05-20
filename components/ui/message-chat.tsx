import { cn } from "@/lib/utils";
import NameAvatar from "./name-avatar";

interface messagesProps {
  message: string;
  name: string;
  date?: string;
}

import { Roboto } from "next/font/google";
const RobotoFont=Roboto({
   subsets: ['latin'], 
  weight: ['400', "500",'600', '700']})

const ChatList = ({ message, name }: messagesProps) => {
  return (
    <div className="flex items-center">
      <NameAvatar name={name} />
      <div className="bg-neutral-100 m-3  h-auto  w-fit max-[50vw]: rounded-lg  p-4">
        <span className={cn("font-normal",RobotoFont.className)}>
            {message}
        </span>
      </div>
    </div>
  );
};

export default ChatList;
