import Image from 'next/image'
import { FC, useState } from 'react'
import burger from '@/../public/burgermen.svg'
import Link from 'next/link'
interface HeaderProps {

}
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"






const Header: FC<HeaderProps> = ({ }) => {

    return <header className='   main-bg-color  flex  px-0 md:px-5 py-5  lg:py-10 justify-between  '>
        <div className='sm:flex relative  items-center mt-10 md:mt-0   gap-3  text-center '>

            <div className='font-bold h-full md:flex hidden text-center items-center align-middle tracking-widest'>
                <Link prefetch={false} href='/'>

                    UNITMK
                </Link>

                <div className='absolute w-9 h-9 border-black border-2 -left-2 '></div>
            </div>
            <div className='h-full md:flex hidden border border-black w-0 '>

            </div>
            <div className='md:flex hidden text-left text-xs md:text-sm font-bold'>
                <Link href='/'>
                    <h2>
                        User Experience <br />
                        for businesses

                    </h2>
                </Link>
            </div>

            <Sheet >
                <SheetTrigger className='block md:hidden ' ><Image src={burger} alt={'Burger'}></Image> </SheetTrigger>
                <SheetContent position="top" size="content" >
                    <SheetHeader>
                        <SheetTitle>Navigation</SheetTitle>
                        <SheetDescription className='space-x-5'>
                           

                                <Link prefetch={false}  href={""}>Home</Link>
                                <Link prefetch={false} href={"contact"}>Contact us</Link>
                                <Link prefetch={false} href={"about"}>About</Link>
                           


                        </SheetDescription>
                        <SheetFooter className='space-y-5'>
                            <Link prefetch={false} href={"privacy"}>Privacy</Link>
                        </SheetFooter>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
        <div className=' hidden md:flex  gap-10 text-lg '>


            <Link className='block  hover:underline  ' href="about">About</Link>
            <Link className='block  hover:underline' href="contact">Get in touch</Link>


        </div>
        {/* <div className=' md:hidden -mr-5'> <Image src={burger} alt={`BurgerMen`} ></Image></div> */}
    </header >
}

export default Header