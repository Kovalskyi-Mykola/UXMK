import Image from 'next/image'
import { FC } from 'react'
import burger from '@/../public/burgermen.svg' 
import Link from 'next/link'
interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
    return <header className='flex  px-10 md:px-5 py-5  lg:py-10 justify-between  '>
       <Link href='/'>
        <div className='relative flex items-center  gap-3  text-center '>

            <div className='font-bold h-full flex text-center items-center align-middle tracking-widest'>
                UXMK
                <div className='absolute w-9 h-9 border-black border-2 -left-2 '></div>
            </div>
            <div className='h-full border border-black w-0 '>

            </div>
            <div className='text-left text-xs md:text-sm font-bold'>
                <h2>
                    User Experience <br />
                    for businesses

                </h2></div>

        </div>
       </Link>
        <div className=' hidden md:flex  gap-10 text-xl lf:text-2xl'>
           

            <Link  className='block  hover:underline  ' href="about">About</Link>
            <Link className='block  hover:underline' href="contact">Get in touch</Link>


        </div>
        <div className=' md:hidden -mr-5'> <Image src={burger} alt={`BurgerMen`} ></Image></div>
    </header>
}

export default Header