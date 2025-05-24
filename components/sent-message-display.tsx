import { RobotoFont } from "@/app/font/font-export";
import { useGetSentMessage } from "@/app/services/queries";
import { sentMessageProps } from "@/app/types/message-interface";
import { cn } from "@/lib/utils";

interface SentMessageDisplayProps {
  chatId: number;
}
const SentMessageDisplay = ({ chatId }: SentMessageDisplayProps) => {
  const getSentMessage = useGetSentMessage(chatId);
  if (getSentMessage.isLoading) {
    return <div>Loading</div>;
  }
  if (getSentMessage.isError) {
    return <div>Error</div>;
  }
  return (
   <div className="flex flex-col items-end h-[300px] ">
      {getSentMessage.data.map((msg: sentMessageProps) => (
        <div
          className="bg-neutral-100 m-3  h-auto  w-fit max-[50vw]: rounded-lg  p-4"
          key={msg.msgId}
        >
          <span className={cn("font-normal", RobotoFont.className)}>
            {msg.sent_message}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SentMessageDisplay;
