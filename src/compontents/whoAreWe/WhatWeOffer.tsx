"use client"
import FadeIn from '@/animations/fadeInAnimation'
import Image from 'next/image'
import { FC } from 'react'
import square from '@/../public/whatWeOffer/square.svg'
import computer from '@/../public/whatWeOffer/computer.svg'
import headPhones from '@/../public/whatWeOffer/headPhones.svg'
import palm from '@/../public/whatWeOffer/palm.svg'
import star from '@/../public/whatWeOffer/star.svg'

interface WhatWeOfferProps {


}



let props = "relative text-center md:text-left "

const WhatWeOffer: FC<WhatWeOfferProps> = ({ }) => {
    return <section id='offer'  className='scale-75 py-0  md:scale-100 text-slate-900  md:py-40  px-5'>



        <div className='max-w-lg m-auto uppercase tracking-widest mb-20 flex-wrap '>
            <h3 className='  mb-3 w-full'>SERVICES</h3>

            <span className='font-bold block text-4xl tracking-tight '>What we offer?</span>

        </div>
        <div className=' flex justify-evenly gap-20 flex-wrap'>

            <div className={`${props} max-w-lg  `}> <Image className='absolute -left-10 scale-150 top-1.5 ' src={square} alt='someinfo'></Image>
                <h4 className=' mb-6 font-bold tracking-widest text-2xl'> User experience design</h4>

                <FadeIn delay={0.5}>

                    <p className=' text-lg tracking-tight leading-7 text-slate-900 '>We start by performing research and analysis to ensure we understand the problem and project goals. We create a multiple hypothesis and validate these. We create well defined information structures, user flows and prototypes and test these rapidly to make sure we are heading in the right direction. </p>
                </FadeIn>
            </div>
            <div className={`${props} max-w-lg `}> <Image className='absolute -left-10 scale-150 top-1.5 ' src={computer} alt='someinfo'></Image>
                <h4 className=' mb-6 font-bold tracking-widest text-2xl'>User interface design</h4>



                <FadeIn delay={0.2} >

                    <p className=' text-lg tracking-tight leading-7 text-slate-900 '>We design user friendly software interfaces for any devices from desktop to mobile. Perfect user-oriented design helps your product feel comfortable, enjoyable and most important easy to your users. Our design system also helps establish clear design guidelines for developers to follow. </p>
                </FadeIn>

            </div>
            <div className={`${props} max-w-lg `}> <Image className='absolute -left-10 scale-150 top-1.5 ' src={palm} alt='someinfo'></Image>
                <h4 className=' mb-6 font-bold tracking-widest text-2xl'>Interaction design</h4>
                <FadeIn delay={0.2}>
                    <p className=' text-lg tracking-tight leading-7 text-slate-900 '>We create a dialogue between a person and a product, system or service. We aim to create designs that users will find easy to use. </p>
                </FadeIn>
            </div>
            <div className={`${props} max-w-lg `}> <Image className='absolute -left-10 scale-150 top-1.5 '  src={headPhones} alt='someinfo'></Image>
                <h4 className=' mb-6 font-bold tracking-widest text-2xl'>Long term support
                </h4>
                <FadeIn delay={0.2}>
                    <p className=' text-lg tracking-tight leading-7 text-slate-900 '>We prefer to be in touch with our customers for a long time. We build strong and trusting relationships by supporting our customers&apos projects 24/7. </p>
                </FadeIn>
            </div>
            <div className={`${props} max-w-lg `}> <Image className='absolute -left-10 scale-150 top-1.5 ' src={star} alt='someinfo'></Image>
                <h4 className=' mb-6 font-bold tracking-widest text-2xl'>Brand identity
                </h4>

                <FadeIn delay={0.2}>

                    <p className=' text-lg tracking-tight leading-7 text-slate-900 '>We design an eye-catching brand identity that makes your businesses instantly recognizable to your customers.</p>
                </FadeIn>
            </div>



        </div>

    </section>
}

export default WhatWeOffer