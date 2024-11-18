import ProductHeader from '@/components/ProductHeader'

const page = () => {
  return (
    <div className='flex flex-col'>
        <ProductHeader src="bg-[url('/images/homehero.png)]" src2='/images/prod4.png' title='Cloud Readiness Assessment Services' />

        <div className='flex flex-col px-4 gap-4 py-10'>

            <span className='font-semibold'></span>
           
            <span className=''></span>
            
            <p className='font-semibold'></p>

            <span className=''></span>
            
            <p className='font-semibold'></p>

            <span className='flex flex-col gap-5'>
                <div>
                    <p className='font-semibold'>1.</p>

                    <p className='font-semibold'>What We Deliver:</p>
                    <ul className='flex flex-col space-y-2 list-disc list-inside'>
                        <li className=''></li>
                        <li className=''></li>
                    </ul>
                </div>

            </span>


            <p className='font-semibold'></p>

            <ul className='flex flex-col space-y-2 list-disc list-inside'>
                <li><span className='font-semibold'></span> </li>
                <li><span className='font-semibold'></span> </li>
                <li><span className='font-semibold'></span> </li>
                <li><span className='font-semibold'></span> </li>
            </ul>
            
            <p className='font-semibold'></p>

            <ul className='flex flex-col space-y-2 list-disc list-inside'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            
            <p className='font-semibold'></p>
            
            <p></p>
        </div>
    </div>
  )
}

export default page