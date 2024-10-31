import { Separator } from "@/components/ui/separator"

const Flicker = ({text}) => {
  return (
    <div className="absolute bottom-3 right-5 flex gap-2 items-center justify-center">
      <div className="animate-flicker">
        <Separator orientation='vertical' className='border-2 border-[#277A80] h-5 rounded-full' />
      </div>
    <p className="font-semibold text-white">{text}</p>
  </div>
  )
}

export default Flicker