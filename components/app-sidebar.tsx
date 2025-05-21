

import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import CopilotComponent from "./copilot-component"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} >
      <SidebarContent>
       <CopilotComponent/>
      </SidebarContent>
    </Sidebar>
  )
}
