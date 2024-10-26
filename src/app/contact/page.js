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

const page = () => {
  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-[737px] bg-[url('/images/contacthero.png')] bg-no-repeat">
          <div className='bg-[#277A80] opacity-40 w-full h-[737px] absolute top-0'></div>
          <div className='z-10 container flex flex-col items-center justify-center gap-10'>
            <div className='text-lg bg-[#277A80] rounded-sm py-2 px-10 shadow-md text-white cursor-default'>Speak with an Expert</div>
            <div className='text-3xl bg-[#709A9D] rounded-sm py-4 px-20 laptop:px-28 opacity-70 cursor-default shadow-md text-white font-bold'>Contact Us</div>
          </div>
      </div>

      <div className='container mx-auto flex items-center justify-center gap-10'>
        <Card className='bg-[#277A80] w-52 laptop:w-60 h-52 laptp:h-60'>
          <CardHeader className='flex flex-col items-center justify-center text-white'>
              <p className="flex items-center justify-center rounded-full p-3 bg-[#044B50]"><MapPin size={36} /></p>
              <CardTitle className='text-center font-semibold text-xl'>Location</CardTitle>
              <CardDescription className='font-light text-center text-blue-100'>1225 Kennedy Road, Suite 2000, Scarborough, ON M1P 4Y1, Canada</CardDescription>
          </CardHeader>
        </Card>

        <Card className='bg-[#277A80] w-52 laptop:w-60 h-52 laptp:h-60'>
          <CardHeader className='flex flex-col items-center justify-center text-white'>
              <p className="flex items-center justify-center rounded-full p-3 bg-[#044B50]"><InboxIcon size={36} /></p>
              <CardTitle className='text-center font-semibold text-xl'>Email</CardTitle>
              <CardDescription className='font-light text-center'>
                <Link className='text-blue-100 hover:text-blue-950' href='malto:info@junapril.com'>info@junapril.com</Link>
                <br /><br />
                <Link className='text-blue-100 hover:text-blue-950' href='malto:admin@junapril.com'>admin@junapril.com</Link>
              </CardDescription>
          </CardHeader>
        </Card>
      </div>


      <div className='flex flex-col laptop:flex-row justify-between container tablet:mx-auto gap-6'>
        <div className='basis-2/3 mx-4'>
          <ContactForm />
        </div>
        <div className='basis-1/3 mx-4'>
          <GetInTouch />
        </div>
      </div>

      <div className='max-w-3xl mx-2 my-10 tablet:mx-auto text-center text-md font-semibold'>
        "From day One, Junapril took time to fully understand our practice and how we deliver services to our clients.
         This was reflected in both the hands on structuring of our New Compliance Program and the Development of New Policies and Procedures
          of our Staff"
      </div>
    </section>
  )
}

export default page