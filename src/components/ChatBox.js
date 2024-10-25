import { RiChat1Line } from "react-icons/ri";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import ChatForm from "./ChatForm";

const ChatBox = () => {
  return (
    <Dialog className=''>
      <DialogTrigger asChild>
        <div className='transition-transform duration-700 ease-in-out transform scale-95 hover:scale-110 w-14 h-14 flex items-center justify-center bg-teal-500 rounded-full p-2'>
            <RiChat1Line color='blue' className='w-8 h-8' />
        </div>
      </DialogTrigger>
      <DialogContent className="tablet:max-w-[500px]">
        <DialogHeader className='py-4 w-full'>
          <DialogTitle>Chat with us</DialogTitle>
        </DialogHeader>
        <ChatForm />
      </DialogContent>
    </Dialog>
  )
}

export default ChatBox