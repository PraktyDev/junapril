import CarouselImg from "@/components/CarouselImg"
import ServiceCard from "@/components/ServiceCard"


const page = () => {
  return (
    <section className='flex flex-col justify-center gap-4'>
        <div className="relative flex items-center justify-center w-full h-screen bg-[url('/images/solutionshero.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className='z-10 w-full container mx-auto'>
                <CarouselImg />
            </div> 
            <div className="text-white z-20 bottom-10 laptop:bottom-20 h-28 w-full absolute bg-[#58474799] text-center justify-center items-center flex flex-col gap-4">
                <h1 className='text-2xl laptop:text-3xl'>IT Audit Services</h1>
                <p className='text-md laptop:text-lg'>Junapril Solutions offers comprehensive IT audit services...</p>
            </div>
        </div>
        <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 justify-between mx-auto tablet:mx-10'>
            <ServiceCard src='/images/itconsult.png' title='IT CONSULTING' desc='We understand the critical importance of safeguarding your digital assets and protecting your organization from cyber threats. Our team of experienced security professionals offers comprehensive consulting services to assess, design, and implement robust cybersecurity strategies tailored to your unique business needs.' />
            <ServiceCard src='/images/itconsult.png' title='HEALTH RECORD PRIVACY' desc='Health Record Privacy is essential to protect patients, sensitive medical information. examples: Confidentiality, Integrity and Availability.' />
            <ServiceCard src='/images/itconsult.png' title='COMPLIANCE CONSULTING' desc='Compliance Consulting helps organizations navigate regulatory requirements, manage risk and ensure adherence to laws and standards.' />
            <ServiceCard src='/images/itconsult.png' title='RECRUITMENT' desc='Recruitment is the process of finding, attracting and selecting the best candidates for a job opening.' />
        </div>
    </section>
  )
}

export default page