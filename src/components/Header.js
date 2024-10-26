'use client'
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"  
import Subscription from "./Subscription"

const Header = () => {
    const pathname = usePathname();
    
  return (
    <div className='z-50 flex justify-between items-center px-4 laptop:px-5 w-full sticky top-0 h-14 laptop:h-14 bg-[#FFFEFE] shadow-md'>
      <Link href={'/'} className='bg-[#277A80] h-10 laptop:h-14 px-3 laptop:px-5 flex justify-end rounded-md laptop:rounded-none py-1 laptop:py-0'>
        <Image src={'/images/junapril.png'} width={100} height={100} alt='junapril logo' className="z-50 object-fill laptop:object-cover w-full laptop:w-auto h-auto" />
      </Link>

      <div className='hidden laptop:block space-x-4'>
        <Link className={`link ${pathname === '/' ? 'bg-[#277A80] text-slate-100 font-bold' : 'text-black font-thin bg-slate-200 hover:bg-slate-100'} rounded-2xl px-4 py-2`} href={'/'}>
          Home
        </Link> 
        <Link className={`link ${pathname === '/about' ? 'bg-[#277A80] text-slate-100 font-bold' : 'text-black font-thin bg-slate-200 hover:bg-slate-100'} rounded-2xl px-4 py-2 text-nowrap`} href={'/about'}>
          About Us
        </Link> 
        <Link className={`link ${pathname === '/solutions' ? 'bg-[#277A80] text-slate-100 font-bold' : 'text-black font-thin bg-slate-200 hover:bg-slate-100'} rounded-2xl px-4 py-2`} href={'/solutions'}>
          Solutions
        </Link> 
        <Link className={`link ${pathname === '/products' ? 'bg-[#277A80] text-slate-100 font-bold' : 'text-black font-thin bg-slate-200 hover:bg-slate-100'} rounded-2xl px-4 py-2`} href={'/products'}>
          Products
        </Link> 
        <Link className={`link ${pathname === '/contact' ? 'bg-[#277A80] text-slate-100 font-bold' : 'text-black font-thin bg-slate-200 hover:bg-slate-100'} rounded-2xl px-4 py-2`} href={'/contact'}>
          Contacts
        </Link> 
      </div>

        <div className='block laptop:hidden'>
      <Sheet>
        <SheetTrigger className='flex items-center'>
            <Menu className='h-8 w-8 hover:text-[#277A80]' />
        </SheetTrigger>
        <SheetContent className=" flex flex-col items-center justify-center w-[300px]">
            <SheetHeader>
            <SheetDescription className='flex flex-col gap-10'>
                <Link className={`link ${pathname === '/' ? 'text-[#277A80] font-bold' : 'text-black font-medium hover:text-[#277A80] hover:font-semibold'} text-2xl tablet:text-3xl`} href={'/'}>
                    Home
                </Link> 
                <Link className={`link ${pathname === '/about' ? 'text-[#277A80] font-bold' : 'text-black font-medium hover:text-[#277A80] hover:font-semibold'} text-2xl tablet:text-3xl text-nowrap`} href={'/about'}>
                    About Us
                </Link> 
                <Link className={`link ${pathname === '/solutions' ? 'text-[#277A80] font-bold' : 'text-black font-medium hover:text-[#277A80] hover:font-semibold'} text-2xl tablet:text-3xl`} href={'/solutions'}>
                    Solutions
                </Link> 
                <Link className={`link ${pathname === '/products' ? 'text-[#277A80] font-bold' : 'text-black font-medium hover:text-[#277A80] hover:font-semibold'} text-2xl tablet:text-3xl`} href={'/products'}>
                    Products
                </Link> 
                <Link className={`link ${pathname === '/contact' ? 'text-[#277A80] font-bold' : 'text-black font-medium hover:text-[#277A80] hover:font-semibold'} text-2xl tablet:text-3xl`} href={'/contact'}>
                    Contacts
                </Link>
            </SheetDescription>
            </SheetHeader>
            <SheetFooter className='mt-10'>
                <Subscription />
            </SheetFooter>
        </SheetContent>
        </Sheet>
        </div>
    </div>
  )
}

export default Header