import { Button } from "./ui/button"
import { Input } from "./ui/input"


const Subscription = () => {
  return (
    <div className='flex items-center'>
        <Input placeholder='Your Email Address' className='bg-white rounded-none'  />
        <Button className='bg-[#277A80] rounded-none'>Subscribe</Button>
    </div>
  )
}

export default Subscription