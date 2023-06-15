'use client'
import Image from 'next/image';
import { FC, useState } from 'react'
import whatsUp from '@/../public/WhatsUp.svg'
import telegram from '@/../public/Telegram.svg'
import FadeInFromSide from '@/animations/FadeInFromSide';
import Link from 'next/link';

interface GetInTouchProps {
}
const GetInTouch: FC<GetInTouchProps> = ({ }) => {

    return <div className=' lg:px-0'>    
        <FadeInFromSide direction='left'>
            <div className='space-y-5'>
                <div className=' '>
                    <span className='text-base my-2 text-slate-500 block'>Email us</span>
                    <p className='text:lg sm:text-lg '>contact@unitmk.com</p>
                </div>
                <div className=''>
                    <span className='text-base my-2 text-slate-500 block'>Ukraine</span>
                    <p className='text:lg sm:text-lg '>+380 99 366 26 52</p>
                </div>
                <div className=' flex items-center gap-5'>
                    <div>
                        <span className='text-base my-2 text-slate-500 block'>Canada</span>
                        <p className='text:lg sm:text-lg '>+1 647 609 6043</p>
                    </div>
                    <div className='flex gap-5'>
                        <Link prefetch={false} href="https://t.me/NickKovalskyi">
                            <Image src={telegram} alt='SocaialMedia'></Image>
                        </Link>
                        <Link prefetch={false} href="">
                            <Image src={whatsUp} alt='SocaialMedia'></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </FadeInFromSide>
    </div>
}
export default GetInTouch