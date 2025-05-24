import { cn } from "@/lib/utils";
import NameAvatar from "./name-avatar";
import { RobotoFont } from "@/app/font/font-export";

interface messagesProps {
  message: string;
  id:number
}


const ChatList = ({ message, id }: messagesProps) => {
  return (
    <div className="flex items-center">
      <NameAvatar id={id} />
      <div className="bg-neutral-100 m-3  h-auto  w-fit max-[50vw]: rounded-lg  p-4">
        <span className={cn("font-normal",RobotoFont.className)}>
            {message}
        </span>
      </div>
    </div>
  );
};

export default ChatList;
