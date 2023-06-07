'use client'
import { FC } from 'react'

import Block from './Block'

import arrow from '@/../public/Arrow.svg'
import Image from 'next/image'
import FadeIn from '@/animations/fadeInAnimation'
import Link from 'next/link'


interface IntroductionPageProps {

}

const IntroductionPage: FC<IntroductionPageProps> = ({ }) => {
    return <section id='intrudaction_page' className='flex  md:justify-between mb-10 sm:mb-20 lg:mb-40 align-middle items-center' >
        <FadeIn >

            <div className='pt-10 text-left px-5 lg:px-0 sm:text-left   relative text-slate-900'>

                <h2 className='  mt-16 sm:mb-4 text-sm tracking-widest '>SOLUTION COMPANY</h2>
                <h1 className=' text-2xl md:w-max shrink-0 md:text-5xl sm:text-6xl font-bold mt-5 mb-5 sm:mb-10'>We sell solutions. <span className='animate-ping duration-300'>|</span></h1>
                <p className='mb-5 tracking-tighter sm:mb-14 text-base sm:text-xl  leading-6 sm:leading-10 '>Creating a solution based on     the real needs of the <br className='hidden sm:block' /> client.  Do you have any problem with what has to be solved?</p>
                <Link href={"/contact"}>
                    <button className='font-bold max-w-lg 2xl:max-w-full block w-full py-4 text-center border text-xl  main_color_asbg text-white    border-black'>Hire us</button>
                </Link>
          
            </div>
        </FadeIn>
        <FadeIn >
            <div className=' md:items-center grid-cols-3 text-white text-base hidden lg:grid grid-rows-3 text-center gap-3 '>
                <div></div>
                <div></div>
                <Block > GIFT DESIGN </Block>
                <div></div>
                <Block >1 MONTH
                    FREE EDITING </Block>
                <Block >DURATION
                    1-3 WEEK </Block>
                <Block isWhite={true} >FREE
                    CONSULTATION</Block>
                <Block >MONEY BACK</Block>
                <Block >NEXT JS</Block>
            </div>
        </FadeIn>
    </section >
}

export default IntroductionPage