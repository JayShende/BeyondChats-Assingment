
// interface for the message being sent from the FE to BE
export interface sendMessageInterface {
  msg: string;
  chatId: number;
}

// interface of the messages Preview in the LSH Pane

export interface messagesLHSPane {
  id: number;
  name: string;
  message: string;
  lastMsg: string;
  priority: boolean;
}

//  interface of the message recived from the BE
export interface sentMessageProps {
  msgId: number;
  sent_message: string;
  userId: number;
}
