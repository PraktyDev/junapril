import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { RiWhatsappLine } from "react-icons/ri"


const page = () => {
  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-[737px] bg-[url('/images/producthealth.png')] bg-no-repeat">
          <div className='bg-[#277A80] opacity-40 w-full h-[737px] absolute top-0'></div>
          <div className='z-10 container mx-auto flex flex-col items-center justify-center gap-10'>
            <Link href={'https://wa.link/wdgpv6'} className='bg-[#277A80] hover:bg-opacity-90 text-white hover:text-green-300 rounded-sm py-2 px-10 shadow-md flex gap-3 items-center justify-center'>
              <RiWhatsappLine size={20} />
              <span className='text-lg'>Speak with an Expert</span>
            </Link>
            <div className='text-xl laptop:text-2xl bg-[#709A9D] rounded-sm py-4 px-10 text-nowrap laptop:px-20 shadow-lg cursor-default text-white font-bold uppercase'>Health Record Policy</div>
            <Link href={'/contact'} className='w-40 laptop:w-56 text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl'>Get in Touch</Link>
          </div>
      </div>
      <div className='z-10 -mt-36 tablet:-mt-24 laptop:leading-7 laptop:-mt-28 max-w-2xl bg-[#277A80] rounded-md mx-4 tablet:mx-auto text-white text-center py-4 px-4 laptop:px-8'>
        Junapril health care organizations to meet their regulatory compliance requirements by providing specialized services developed by proven industry experts. As an industry leader in health care regulatory compliance and compliance operations, Junapril has worked with a broad range of health care organizations, IT Security Solution and E-commerce to design, implement, manage and improve their compliance programs.
      </div>
      <div className='w-full bg-[#474040] text-white flex flex-col gap-1 py-4 items-center text-center'>
        <span className='uppercase font-semibold'>Our Products</span>Explore a whole new world with software solutions tailored to your business needs
      </div>

      <div className='flex flex-col gap-4 tablet:gap-20 tablet:max-w-5xl laptop:container mx-2 laptop:mx-auto laptop:px-2'>
        <div className='flex flex-col tablet:flex-row gap-4'>
          <div className="tablet:basis-1/3 relative w-full h-56 tablet:h-60 laptop:h-72 overflow-hidden rounded-md group">
            <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform scale-110 group-hover:scale-100">
              <Image
                src='/images/producthrp.png'
                alt=''
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="absolute bottom-0 left-0 right-0 text-center text-white text-md font-bold z-10 bg-[#47404090] flex justify-center items-center py-1">Health Record Policy</p>
          </div>
          <p className='tablet:basis-2/3 text-justify'>
            Healthcare: Protecting sensitive patient data and ensuring compliance with industry regulations.<br />
            1. HIPAA (Health Insurance Portability and Accountability Act)<br />
            2. HITECH (Health Information Technology for Economic and Clinical Health) Act<br /><br />
            Consultants help implement policies, procedures, and training to safeguard PHI, manage breaches, and ensure compliance.<br /><br />
            Are you seeking consultation for:<br /><br />
            1. Risk assessments<br />
            2. Policy development<br />
            3. Staff training<br />
            4. Audit preparedness<br />
            5. Something else?
          </p>
        </div>
        </div>



      <div className='w-full bg-[#D9D9D9] text-white flex flex-col gap-1 py-4 items-center text-center mt-10 laptop:mt-20 mb-5'>
        <Separator className="bg-[#277A80] rounded-full w-20 h-1" />
        <span className='uppercase text-[#277A80] font-semibold'>Our Commitment</span>
        <span className='text-black'>Junapril helping organizations protect critical assets is our only business.</span>
      </div>
    </section>
  )
}

export default page