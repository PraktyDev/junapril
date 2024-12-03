import { InboxIcon, MapPin } from 'lucide-react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import GetInTouch from '@/components/GetInTouch'
import ContactForm from '@/components/ContactForm'
import Review from '@/components/Review'
import { RiWhatsappLine } from "react-icons/ri"
import Flicker from '@/components/Flicker'
import GoogleMapComponent from '@/components/Map'

const page = () => {
  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-[737px] bg-no-repeat bg-center laptop:bg-cover animate-contactBgSlide">
          <div className='bg-[#277A80] opacity-40 w-full h-[737px] absolute top-0'></div>
          <div className='z-10 container flex flex-col items-center justify-center gap-10'>
            <Link href={'https://wa.link/wdgpv6'} className='bg-[#277A80] hover:bg-opacity-90 text-white hover:text-green-300 rounded-sm py-2 px-10 shadow-lg flex gap-3 items-center justify-center'>
              <RiWhatsappLine size={20} />
              <span className='text-lg'>Speak with an Expert</span>
            </Link>
            <div className='text-3xl bg-[#709A9D] rounded-sm py-4 px-20 laptop:px-28 cursor-default shadow-lg text-white font-bold'>Contact Us</div>
          </div>
          <Flicker text='Contact Us' />
      </div>

      <div className='container mx-auto flex items-center justify-center gap-10 mt-4'>
        <Card className='bg-[#277A80] w-52 laptop:w-60 h-52 laptp:h-60'>
          <CardHeader className='flex flex-col items-center justify-center text-white'>
              <p className="flex items-center justify-center rounded-full p-3 bg-[#044B50]"><MapPin size={36} /></p>
              <CardTitle className='text-center font-semibold text-xl'>Location</CardTitle>
              <CardDescription className='font-light text-center text-blue-100'>1225 Kennedy Road, Suite 2000, Scarborough, ON M1P 4Y1</CardDescription>
          </CardHeader>
        </Card>

        <Card className='bg-[#277A80] w-52 laptop:w-60 h-52 laptp:h-60'>
          <CardHeader className='flex flex-col items-center justify-center text-white'>
              <p className="flex items-center justify-center rounded-full p-3 bg-[#044B50]"><InboxIcon size={36} /></p>
              <CardTitle className='text-center font-semibold text-xl'>Email</CardTitle>
              <CardDescription className='font-light text-center'>
                <Link className='text-blue-100 hover:text-blue-50' href='malto:contact@junaprilsolutions.com'>contact@junaprilsolutions.com</Link>
              </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <GoogleMapComponent />

      <div className='flex flex-col laptop:flex-row justify-between container tablet:mx-auto gap-6'>
        <div className='basis-2/3 mx-4'>
          <ContactForm />
        </div>
        <div className='basis-1/3 mx-4'>
          <GetInTouch />
        </div>
      </div>

      <div className='max-w-3xl mx-2 my-6 tablet:my-10 tablet:mx-auto'>
        <Review />
      </div>
    </section>
  )
}

export default page