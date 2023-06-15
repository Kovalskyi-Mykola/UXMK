'use client'
import { FC } from 'react'
import Block from './Block'
import FadeIn from '@/animations/fadeInAnimation'
import Link from 'next/link'


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import NavMenu from '../NavMenu/NavMenu'


interface IntroductionPageProps {

}

const IntroductionPage: FC<IntroductionPageProps> = ({ }) => {
    return <div>

        <div> <NavMenu></NavMenu></div>
        <section id='intrudaction_page' className='flex -mt-14 md:-mt-0  md:justify-between mb-10 sm:mb-20 lg:mb-40 align-middle items-center' >


            <FadeIn >

                <div className='pt-10 text-left  lg:px-0 sm:text-left   relative text-slate-900'>

                    <h2 className='  mt-16 sm:mb-4 text-sm tracking-widest '>SOLUTION COMPANY</h2>
                    <h1 className=' text-2xl md:w-max shrink-0 md:text-5xl sm:text-6xl font-bold mt-5 mb-5 sm:mb-10'>We sell solutions. <span className='animate-ping duration-400'>|</span></h1>
                    <p className='mb-5 tracking-tighter sm:mb-14 text-base sm:text-xl  leading-6 sm:leading-10 '>Creating a solution based on the real needs of the <br className='hidden sm:block' /> client.  Do you have any problem with what has to be solved?</p>
                    <Link prefetch={false} href={"/contact"}>
                        <button className='font-bold max-w-lg 2xl:max-w-full block w-full py-4 text-center border text-xl  main_color_asbg text-white    border-black'>Hire us</button>
                    </Link>

                </div>
            </FadeIn>
            <FadeIn >
                <div className=' md:items-center grid-cols-3 text-white text-base hidden lg:grid grid-rows-3 text-center gap-3 '>
                    <div></div>
                    <div></div>
                    <AlertDialog>
                        <AlertDialogTrigger><Block > GIFT DESIGN </Block></AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>GIFT DESIGN</AlertDialogTitle>
                                <AlertDialogDescription>
                                    We wont charge for design
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>

                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>


                    <div></div>

                    <AlertDialog>
                        <AlertDialogTrigger><Block > <Block >1 MONTH
                            FREE EDITING </Block></Block></AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>1 MONTH
                                    FREE EDITING</AlertDialogTitle>
                                <AlertDialogDescription>
                                    We will adjust website design for 1 month for free if you will ask for that
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>

                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <AlertDialog>
                        <AlertDialogTrigger>  <Block >DURATION
                            1-3 WEEK </Block>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>DURATION
                                    1-3 WEEK</AlertDialogTitle>
                                <AlertDialogDescription>
                                    We will finish your project in mere 1 week
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>

                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                        <AlertDialogTrigger><Block isWhite={true} >FREE
                            CONSULTATION</Block></AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>FREE
                                    CONSULTATION</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Dont fear talk to us! we put customer on the first place!
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>

                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                        <AlertDialogTrigger><Block >MONEY BACK</Block></AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>MONEY BACK</AlertDialogTitle>
                                <AlertDialogDescription>
                                    If you wont be satisfied, we will refund you money back!
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>

                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                        <AlertDialogTrigger><Block >NEXT JS</Block></AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>NEXT JS</AlertDialogTitle>
                                <AlertDialogDescription>
                                    We use modern technology as next js, tanstack, drizzle and much more.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>

                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>



                </div>
            </FadeIn>
        </section >
    </div>
}

export default IntroductionPage