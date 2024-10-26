import ImageCard from "@/components/ImageCard"
import ServiceCard from "@/components/ServiceCard"
import { ArrowRightCircleIcon } from "lucide-react"
import Link from "next/link"

const page = () => {
  return (
    <section className='flex flex-col justify-center gap-4 w-full'>
      <div className="relative flex items-center justify-center laptop:justify-end w-full h-screen bg-[url('/images/it.jpg')] bg-no-repeat">
          <div className='bg-black opacity-50 w-full h-screen absolute top-0'></div>
          <div className='flex flex-col justify-center laptop:items-end laptop:pr-10 items-center gap-14 '> 
            <h1 className='z-10 text-4xl tablet:text-5xl laptop:text-6xl text-white text-center font-bold'>Welcome <br />to <br />Junapril Solutions Ltd</h1>
            <p className='laptop:-mt-8 z-10 mx-4 tablet:mx-0 text-md laptop:text-lg text-center font-semibold text-white'>Your trusted partner in IT security consulting, recruitment, and eCommerce solutions.</p>
            <Link href={'/contact'} className='z-10 w-40 laptop:w-56 laptop:-mt-8 text-nowrap text-center bg-none hover:bg-[#277A80] text-white text-md tablet:text-lg laptop:text-xl border-2 px-2 laptop:px-10 py-1.5 laptop:py-2 border-[#277A80] rounded-xl'>Get in Touch</Link>
          </div>
      </div>

      <div className='grid grid-cols-2 laptop:grid-cols-4 gap-4 justify-center mx-auto'>
        <ImageCard src='/images/itconsult.png' text='IT CONSULTING' alt='IT consult' />
        <ImageCard src='/images/itrecruit.png' text='RECRUITMENT' alt='recruitment' />
        <ImageCard src='/images/ittraining.png' text='TRAINING' alt='training' />
        <ImageCard src='/images/ecom.png' text='E-COMMERCE' alt='ecommerce' />
      </div>

      <div className="w-full flex flex-col items-center laptop:items-start h-screen bg-[url('/images/text.jpg')] bg-no-repeat">
        <div className='w-full laptop:w-[500px] mb-16 flex items-center justify-center shadow-sm rounded-sm laptop:ml-5 bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40'>
          <p className='text-white text-center text-lg laptop:text-xl font-bold py-4'>OUR SERVICES</p>
        </div>

        <div className='laptop:ml-5 flex flex-col w-[450px] tablet:w-[500px] space-y-8'>
          <div className='flex items-center justify-between shadow-sm rounded-sm pl-20 bg-white hover:bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 transition-all duration-1000 hover:ease-in-out'>
            <p className='text-black text-left text-lg laptop:text-xl font-bold py-4 basis-2/3'>IT CONSULTING</p>
            <ArrowRightCircleIcon className='basis-1/3'/>
          </div>
          <div className='flex items-center justify-between shadow-sm rounded-sm pl-20 bg-white hover:bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 transition-all duration-1000 hover:ease-in-out'>
            <p className='text-black text-left text-lg laptop:text-xl font-bold py-4 basis-2/3'>RECRUITMENT</p>
            <ArrowRightCircleIcon className='basis-1/3'/>
          </div>
          <div className='flex items-center justify-between shadow-sm rounded-sm pl-20 bg-white hover:bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 transition-all duration-1000 hover:ease-in-out'>
            <p className='text-black text-left text-lg laptop:text-xl font-bold py-4 basis-2/3'>TRAINING</p>
            <ArrowRightCircleIcon className='basis-1/3'/>
          </div>
          <div className='flex items-center justify-between shadow-sm rounded-sm pl-20 bg-white hover:bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 transition-all duration-1000 hover:ease-in-out'>
            <p className='text-black text-left text-lg laptop:text-xl font-bold py-4 basis-2/3'>E-COMMERCE SOLUTION</p>
            <ArrowRightCircleIcon className='basis-1/3'/>
          </div>
          <div className='flex items-center justify-between shadow-sm rounded-sm pl-20 bg-white hover:bg-gradient-to-r from-teal-700/95 via-teal-700/50 to-teal-700/40 transition-all duration-1000 hover:ease-in-out'>
            <p className='text-black text-left text-lg laptop:text-xl font-bold py-4 basis-2/3'>HEALTH RECORD PRIVACY</p>
            <ArrowRightCircleIcon className='basis-1/3'/>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 tablet:grid-cols-2 gap-4 mx-2 laptop:container laptop:mx-auto'>
        <ServiceCard src='/images/card1.png' title='IT CONSULTING' desc='We understand the critical importance of safeguarding your digital assets and protecting your organization from cyber threats. Our team of experienced security professionals offers comprehensive consulting services to assess, design, and implement robust cybersecurity strategies tailored to your unique business needs.' />
        <ServiceCard src='/images/itconsult.png' title='HEALTH RECORD PRIVACY' desc='Health Record Privacy is essential to protect patients, sensitive medical information. examples: Confidentiality, Integrity and Availability.' />
        <ServiceCard src='/images/itconsult.png' title='COMPLIANCE CONSULTING' desc='Compliance Consulting helps organizations navigate regulatory requirements, manage risk and ensure adherence to laws and standards.' />
        <ServiceCard src='/images/itconsult.png' title='RECRUITMENT' desc='Recruitment is the process of finding, attracting and selecting the best candidates for a job opening.' />
      </div>
    </section>
  )
}

export default page