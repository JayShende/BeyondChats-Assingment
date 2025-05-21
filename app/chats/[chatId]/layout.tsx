import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

interface LayoutChatIdProps {
  children: ReactNode;
}

const LayoutChatId = ({ children }: LayoutChatIdProps) => {
  return (
    <div className="flex">
      <SidebarProvider defaultOpen={false} className="bg-[#eff0eb]">
        <main className="flex-1 min-h-screen">{children}</main>
        <AppSidebar side="right" variant="floating" className="my-2.5"/>
      </SidebarProvider>
    </div>
  );
};

export default LayoutChatId;
