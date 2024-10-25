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
    <div className='z-50 flex justify-between items-center px-3 laptop:px-10 w-full sticky top-0 h-14 tablet:h-16 bg-[#FFFEFE] shadow-md'>
      <Link href={'/'} className='bg-[#277A80] h-14 tablet:h-16 pl-5 pr-5 flex justify-end'>
        <Image src={'/images/junapril.png'} width={100} height={100} alt='junapril logo' className="z-50 object-cover w-auto h-auto" />
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
        <SheetTrigger>
            <Menu className='h-8 w-8' />
        </SheetTrigger>
        <SheetContent className="w-[300px] tablet:w-[400px] flex flex-col items-center justify-center">
            <SheetHeader>
            <SheetDescription className='flex flex-col gap-10'>
                <Link className={`link ${pathname === '/' ? 'text-[#277A80] font-bold' : 'text-black font-thin hover:text-[#277A80]'} text-xl tablet:text-2xl`} href={'/'}>
                    Home
                </Link> 
                <Link className={`link ${pathname === '/about' ? 'text-[#277A80] font-bold' : 'text-black font-thin hover:text-[#277A80]'} text-xl tablet:text-2xl text-nowrap`} href={'/about'}>
                    About Us
                </Link> 
                <Link className={`link ${pathname === '/solutions' ? 'text-[#277A80] font-bold' : 'text-black font-thin hover:text-[#277A80]'} text-xl tablet:text-2xl`} href={'/solutions'}>
                    Solutions
                </Link> 
                <Link className={`link ${pathname === '/products' ? 'text-[#277A80] font-bold' : 'text-black font-thin hover:text-[#277A80]'} text-xl tablet:text-2xl`} href={'/products'}>
                    Products
                </Link> 
                <Link className={`link ${pathname === '/contact' ? 'text-[#277A80] font-bold' : 'text-black font-thin hover:text-[#277A80]'} text-xl tablet:text-2xl`} href={'/contact'}>
                    Contacts
                </Link>
            </SheetDescription>
            </SheetHeader>
            <SheetFooter>
                <Subscription />
            </SheetFooter>
        </SheetContent>
        </Sheet>
        </div>
    </div>
  )
}

export default Header