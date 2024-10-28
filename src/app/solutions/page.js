import CarouselImg from "@/components/CarouselImg"
import ServiceCard from "@/components/ServiceCard"
import SolutionCard from "@/components/SolutionCard"
import { Separator } from "@/components/ui/separator"


const page = () => {
  return (        
    <section className='flex flex-col justify-center gap-4 w-full'>
        <div className="relative flex items-center justify-center w-full h-[737px] bg-[#277A80]">
            <div className="absolute inset-0 bg-black h-[737px] opacity-50"></div>
            <div className='z-10 w-full container mx-1 laptop:mx-auto my-auto bg-white rounded-md'>
                <CarouselImg />
            </div> 
            <div className="text-white z-20 bottom-10 laptop:bottom-20 h-28 w-full absolute bg-[#584747] bg-opacity-90 text-center justify-center items-center flex flex-col gap-4">
                <h1 className='text-2xl laptop:text-3xl'>IT Audit Services</h1>
                <p className='text-md laptop:text-lg'>Junapril Solutions offers comprehensive IT audit services...</p>
            </div>
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 justify-between place-items-center mx-4 tablet:mx-10'>
            <ServiceCard src='/images/card1.png' title='IT CONSULTING' desc='We understand the critical importance of safeguarding your digital assets and protecting your organization from cyber threats. Our team of experienced security professionals offers comprehensive consulting services to assess, design, and implement robust cybersecurity strategies tailored to your unique business needs.' />
            <ServiceCard src='/images/hprc.png' title='HEALTH RECORD PRIVACY' desc='Health Record Privacy is essential to protect patients, sensitive medical information. examples: Confidentiality, Integrity and Availability.' />
            <ServiceCard src='/images/cc.png' title='COMPLIANCE CONSULTING' desc='Compliance Consulting helps organizations navigate regulatory requirements, manage risk and ensure adherence to laws and standards.' />
            <ServiceCard src='/images/rct.png' title='RECRUITMENT' desc='Recruitment is the process of finding, attracting and selecting the best candidates for a job opening.' />
        </div>

        <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 mx-4'>
            <div className='flex flex-col gap-4'>
                <SolutionCard src='/images/risk.png' title='Risk Assessment' desc="We provide expert Risk Assessment services tailored to assist organizations in identifying and mitigating potential risks across their operations. Our systematic approach involves evaluating a range of factors, including cybersecurity threats, regulatory compliance, financial risks, and operational vulnerabilities. We leverage industry-standard controls and frameworks, such as NIST, ISO, and COBIT, to ensure comprehensive risk assessment coverage. Through our thorough analysis and evaluation, we deliver actionable insights and recommendations to strengthen risk management strategies and enhance overall resilience." />
                <SolutionCard src='/images/remediation.png' title='Remediation Planning & Implementation' desc="Junapril Solutions offers comprehensive Remediation Planning and Implementation services, utilizing industry-leading methodologies and expertise to address security vulnerabilities and mitigate risks effectively. Our tailored approach encompasses thorough assessment, prioritized remediation planning, and swift implementation of security controls and measures to strengthen the organization's cybersecurity posture. With a focus on continuous improvement and proactive risk management, we enable organizations to achieve rapid and sustainable remediation outcomes, ensuring resilience against evolving cyber threats." />
                <SolutionCard src='/images/compliance.png' title='Compliance Framework Implementation' desc="Junapril Solutions specializes in Supply Chain Risk Management (SCRM), also known as third-party risk management, to help organizations mitigate risks associated with their extended supply chains. Our SCRM services encompass comprehensive assessments, monitoring, and mitigation strategies to safeguard against potential threats and vulnerabilities arising from third-party relationships. We conduct thorough assessments of third-party vendors, suppliers, and partners to identify potential risks and vulnerabilities in their operations. Through rigorous evaluation and analysis, we assess factors such as security controls, data privacy practices, regulatory compliance, financial stability, and overall risk posture. Utilizing advanced tools and methodologies, we continuously monitor third-party activities and performance, alerting organizations to emerging risks and vulnerabilities in real-time. Our proactive approach enables organizations to respond swiftly to potential threats and prevent disruptions to their supply chain operations." />
            </div>
            <div className='flex flex-col gap-4'>
                <SolutionCard src='/images/audit.png' title='IT Audit Services' desc="Junapril Solutions offers comprehensive IT audit services tailored to meet the evolving needs and challenges of modern organizations. Our experienced IT auditors utilize industry-leading methodologies and best practices to conduct objective assessments of clients' IT environments. We assess key areas such as network security, data protection, access controls, system configurations, and compliance with relevant standards and regulations. Our risk-based approach prioritizes audit activities to focus on areas of highest risk and potential impact. We employ advanced tools and technologies to gather and analyze data, identifying vulnerabilities and weaknesses. Our audit services encompass cybersecurity audits, compliance audits, IT governance audits, risk management audits, third-party vendor audits, and cloud security audits. Our IT audit reports provide clear findings and practical recommendations for improvement. We work closely with clients to ensure a thorough understanding of audit findings and support the implementation of recommended actions. With Junapril Solutions' IT audit services, organizations gain valuable insights into their IT environment's strengths and weaknesses, strengthening cybersecurity defenses, and improving overall governance and risk management capabilities." />
                <SolutionCard src='/images/supplychain.png' title='Supply Chain Risk Management' desc="Junapril Solutions specializes in Supply Chain Risk Management (SCRM), also known as third-party risk management, to help organizations mitigate risks associated with their extended supply chains. Our SCRM services encompass comprehensive assessments, monitoring, and mitigation strategies to safeguard against potential threats and vulnerabilities arising from third-party relationships. We conduct thorough assessments of third-party vendors, suppliers, and partners to identify potential risks and vulnerabilities in their operations. Through rigorous evaluation and analysis, we assess factors such as security controls, data privacy practices, regulatory compliance, financial stability, and overall risk posture. Utilizing advanced tools and methodologies, we continuously monitor third-party activities and performance, alerting organizations to emerging risks and vulnerabilities in real-time. Our proactive approach enables organizations to respond swiftly to potential threats and prevent disruptions to their supply chain operations." />
            </div>
            <div className='flex flex-col tablet:flex-row laptop:flex-col gap-4 tablet:col-span-full laptop:col-span-1'>   
                <SolutionCard src='/images/secure.png' title='Security Awareness & Training' desc="Junapril Solutions delivers bespoke security awareness and training programs, tailored to meet the specific needs of organizations grappling with cyber threats. Through immersive modules, hands-on exercises, and role-tailored tracks, our programs instill a culture of vigilance and accountability, equipping employees at all levels with the expertise needed to navigate the evolving threat landscape effectively. With simulated phishing exercises, interactive workshops, and real-world scenarios, we empower organizations to bolster their defenses, mitigate risks, and safeguard critical assets against sophisticated cyber adversaries. By leveraging industry-leading methodologies and cutting-edge techniques, our programs ensure that organizations stay ahead of emerging threats, cultivate a security-first mindset, and drive resilience in the face of evolving cybersecurity challenges." />
                <SolutionCard src='/images/technical.png' title='Technical Writing' desc="Junapril Solutions offers expert technical writing services focused on developing concise and effective Information Security (Infosec) documentation. We craft tailored policies, standards, procedures, and playbooks that align with industry best practices and regulatory requirements. Our Infosec policies establish overarching principles and guidelines, while standards provide specific requirements for implementing security controls. We also create procedural documentation for executing security tasks and playbooks for incident response. With our expertise, organizations can establish a robust framework for managing information security risks, ensuring compliance, and enhancing cybersecurity resilience. Our documentation fosters a strong security culture and enables proactive threat mitigation." />
            </div>
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
            <span className='text-black max-w-2xl mx-4 tablet:mx-auto'>Access expertise that enables you to simplify, scale, and level up your security posture no matter where you are on your security maturity journey.</span>
        </div>
    </section>
  )
}

export default page