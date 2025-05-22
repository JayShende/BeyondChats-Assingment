import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GiNightSleep } from "react-icons/gi"
import { ComboboxSnooze } from "./combobox-snooze"

export function SnoozeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
         <Button variant="secondary" className="cursor-pointer"><GiNightSleep />Snooze</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Snooze Chat</DialogTitle>
          <DialogDescription>
           New Messages From the chat will not be shown
          </DialogDescription>
        </DialogHeader>
        <ComboboxSnooze/>
        <DialogFooter>
             <DialogClose asChild>
          <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
