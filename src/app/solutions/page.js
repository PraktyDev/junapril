import CarouselImg from "@/components/CarouselImg"
import ServiceCard from "@/components/ServiceCard"
import { Separator } from "@/components/ui/separator"


const page = () => {
  return (
    <section className='flex flex-col justify-center gap-4'>
        <div className="relative flex items-center justify-center w-full h-screen bg-[url('/images/solutionshero.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className='z-10 w-full container mx-auto'>
                <CarouselImg />
            </div> 
            <div className="text-white z-20 bottom-10 laptop:bottom-20 h-28 w-full absolute bg-[#58474799] text-center justify-center items-center flex flex-col gap-4">
                <h1 className='text-2xl laptop:text-3xl'>IT Audit Services</h1>
                <p className='text-md laptop:text-lg'>Junapril Solutions offers comprehensive IT audit services...</p>
            </div>
        </div>
        <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 justify-between place-items-center mx-4 tablet:mx-10'>
            <ServiceCard src='/images/itconsult.png' title='IT CONSULTING' desc='We understand the critical importance of safeguarding your digital assets and protecting your organization from cyber threats. Our team of experienced security professionals offers comprehensive consulting services to assess, design, and implement robust cybersecurity strategies tailored to your unique business needs.' />
            <ServiceCard src='/images/itconsult.png' title='HEALTH RECORD PRIVACY' desc='Health Record Privacy is essential to protect patients, sensitive medical information. examples: Confidentiality, Integrity and Availability.' />
            <ServiceCard src='/images/itconsult.png' title='COMPLIANCE CONSULTING' desc='Compliance Consulting helps organizations navigate regulatory requirements, manage risk and ensure adherence to laws and standards.' />
            <ServiceCard src='/images/itconsult.png' title='RECRUITMENT' desc='Recruitment is the process of finding, attracting and selecting the best candidates for a job opening.' />
        </div>

        <div className='w-full bg-[#277A80] text-white flex flex-col gap-1 py-4 items-center text-center'>
            <p className='uppercase text=center rounded-lg bg-[#474040] mx-auto py-1 px-10 laptop:px-20 flex items-center justify-center text-nowrap'>Why Work with Junapril Solutions?</p>
            <div className='flex flex-col max-w-2xl gap-3 mx-2 tablet:mx-auto'>
                <p className='text-center'><span className='font-semibold'>Expertise: </span>Our team brings a wealth of knowledge and experience to every project, ensuring exceptional results.</p>
                <p className='text-center'><span className='font-semibold'>Innovation: </span>We stay ahead of the curve by embracing emerging technologies and best practices in the field of IT security and eCommerce.</p>
                <p className='text-center'><span className='font-semibold'>Client-Centric Approach: </span>Your success is our top priority, and we are committed to delivering solutions that meet your unique </p>
            </div>
        </div>

        <div className='w-full bg-[#D9D9D9] text-white flex flex-col gap-1 py-6 -mb-5 items-center text-center'>
            <Separator className="bg-black rounded-full w-20 h-1" />
            <span className='uppercase text-black font-semibold'>Our Solution</span>
            <span className='text-black max-w-2xl mx-auto'>Access expertise that enables you to simplify, scale, and level up your security posture no matter where you are on your security maturity journey.</span>
        </div>
    </section>
  )
}

export default page