export interface sendMessageInterface {
  msg: string;
  chatId: number;
}

export interface messagesLHSPane {
  id: number;
  name: string;
  message: string;
  lastMsg: string;
  priority: boolean;
}

export interface sentMessageProps {
  msgId: number;
  sent_message: string;
  userId: number;
}
