import { ArrowRightCircleIcon } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog";

const ServiceLinks = ({title, content}) => {
  return (
    <Dialog className=''>
      <DialogTrigger asChild>
        <div className='flex items-center justify-between shadow-sm rounded-sm pl-20 bg-white hover:bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 transition-all duration-1000 hover:ease-in-out'>
            <p className='text-black text-left text-lg laptop:text-xl uppercase font-bold py-4 basis-2/3'>{title}</p>
            <ArrowRightCircleIcon className='basis-1/3'/>
        </div>
      </DialogTrigger>
      <DialogContent className="tablet:max-w-[500px]">
        <DialogHeader className='w-full'>
        </DialogHeader>
        <div className='text-justify font-semibold'>{content}</div>
      </DialogContent>
    </Dialog>
  )
}

export default ServiceLinks