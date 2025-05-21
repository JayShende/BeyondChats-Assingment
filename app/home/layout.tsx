
import { ReactNode } from "react";

interface LayoutChatIdProps {
  children: ReactNode;
}

const LayoutChatId = ({ children }: LayoutChatIdProps) => {
  return <main>{children}</main>;
};

export default LayoutChatId;
