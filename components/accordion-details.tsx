import { RobotoFont } from "@/app/font/font-export";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MdOutlineDeviceHub } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export function AccordionDetails() {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full", RobotoFont.className)}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-medium text-muted-foreground hover:no-underline cursor-pointer">
          LINKS
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full text-muted-foreground">
            <div className="flex justify-between m-2">
              <div className="flex  items-center gap-x-1">
                <MdOutlineDeviceHub className="text-lg" />
                <span className="font-medium">Tracker ticket</span>
              </div>
             <IoIosAddCircle className="text-lg cursor-pointer hover:text-black" />
            </div>
            <div className="flex justify-between m-2">
              <div className="flex  items-center gap-x-1">
                <FaClipboardCheck className="text-lg" />
                <span className="font-medium">Back-office tickets</span>
              </div>
              <IoIosAddCircle className="text-lg cursor-pointer hover:text-black" />
            </div>
            <div className="flex justify-between m-2">
              <div className="flex  items-center gap-x-1">
                <MdArrowOutward className="text-lg" />
                <span className="font-medium">Side conversations</span>
              </div>
              <IoIosAddCircle className="text-lg cursor-pointer hover:text-black" />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-medium text-muted-foreground hover:no-underline cursor-pointer">USER DATA</AccordionTrigger>
        <AccordionContent>
         Manage all your digital interactions with ease. Experience the difference between just another chatbot vs a customer-focused chatbot.
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-medium text-muted-foreground hover:no-underline cursor-pointer">CONVERSATION ATTRIBUTES</AccordionTrigger>
        <AccordionContent>
          Manage all your digital interactions with ease. Experience the difference between just another chatbot vs a customer-focused chatbot.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-medium text-muted-foreground hover:no-underline cursor-pointer">COMPANY DETAILS</AccordionTrigger>
        <AccordionContent>
          Manage all your digital interactions with ease. Experience the difference between just another chatbot vs a customer-focused chatbot.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="font-medium text-muted-foreground hover:no-underline cursor-pointer">SALESFORCE</AccordionTrigger>
        <AccordionContent>
          Manage all your digital interactions with ease. Experience the difference between just another chatbot vs a customer-focused chatbot.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="font-medium text-muted-foreground hover:no-underline cursor-pointer">STRIPE</AccordionTrigger>
        <AccordionContent>
          Manage all your digital interactions with ease. Experience the difference between just another chatbot vs a customer-focused chatbot.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="font-medium text-muted-foreground hover:no-underline cursor-pointer">JIRA FOR TICKETS</AccordionTrigger>
        <AccordionContent>
          Manage all your digital interactions with ease. Experience the difference between just another chatbot vs a customer-focused chatbot.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
