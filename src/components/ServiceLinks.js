import { ArrowRightCircleIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ServiceLinks = ({title, content}) => {
  return (
    <Popover className='laptop:relative'>
      <PopoverTrigger>
        <div className='flex items-center justify-between shadow-sm rounded-sm pl-20 bg-white hover:bg-black hover:text-white transition-all duration-1000 hover:ease-in-out'>
            <p className='text-left text-lg laptop:text-xl uppercase font-bold py-4 basis-2/3'>{title}</p>
            <ArrowRightCircleIcon className='basis-1/3'/>
        </div>
      </PopoverTrigger>
      <PopoverContent className='laptop:absolute laptop:left-64 laptop:-top-16'>
        <div className='text-left'>{content}</div>
      </PopoverContent>
    </Popover>
  )
}

export default ServiceLinks