
import DataComponent from "@/components/data-component-chats";

const ChatsPage = async ({
  params,
}: {
  params: Promise<{ chatId: number }>;
}) => {
  const chatId = Number((await params).chatId );
  

  return (
    <DataComponent chatId={chatId} />
  );
};

export default ChatsPage;
