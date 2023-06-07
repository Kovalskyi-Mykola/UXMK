'use client'

import { useState, useEffect } from 'react'
import { FC } from 'react'
import Image from "next/image"

import photo1 from '@/../public/Rectangle19.jpg'
import photo2 from '@/../public/Rectangle20.jpg'
import photo3 from '@/../public/Rectangle21.jpg'
import photo4 from '@/../public/Rectangle22.jpg'

import arrow from '@/../public/Arrow.svg'
import FadeInFromSide from '@/animations/FadeInFromSide'
import Link from 'next/link'

interface PeojectsPageProps { }
const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
};
const styles = " flex flex-col gap-16 xl:gap-28"

const PeojectsPage: FC<PeojectsPageProps> = ({ }) => {
  return <section id='projects-image' className=' mb-10 '>

    <div className='px-5 lg:px-0'>
      <h3 className=' tracking-widest text-base mb-5 sm:mb-10'>PROJECTS</h3>
      <p className='text-4xl font-bold   mb-5 sm:mb-10 '>What we do?</p>

      <div className=' lg:flex block gap-16 xl:gap-36 '>

        <div className={` ${styles}`}>

          <FadeInFromSide direction='bottom'>

            <div>

              <p className='max-w-xl block w-full text-base sm:text-xl '>We design amazing software int                          fundamentally improve the businesses of our clients.</p>
              {/* <Link href='projects'>

                <span className='underline-text inline-block pt-2 text-xl'> Our projects <Image className='inline-block ml-8 mt-4' src={arrow} alt='Arrow' /></span>

              </Link> */}
            </div>

          </FadeInFromSide>






          <FadeInFromSide direction='bottom'>

            <div className='  lg:max-w-xl'>
              <Link target="_blank" href={"https://grizzlycan.store/"}>
                <Image style={{ objectFit: 'cover' }} quality={40} className='project-images max-h-44 sm:max-h-full' src={photo1} alt='Project main page image'></Image>
              </Link>
            </div>
          </FadeInFromSide>


          <FadeInFromSide direction='bottom'>

            <div className='max-w-xl'>
              <Link target="_blank" href={"https://inite.io/"}>

                <Image style={{ objectFit: 'cover', backgroundPosition: 'center' }} quality={40} className=' max-h-44 sm:max-h-full project-images' src={photo3} alt='Project main page image'></Image>
              </Link>

            </div>
          </FadeInFromSide>
        </div>

        <div className={`hidden lg:flex ${styles}`}>
          <FadeInFromSide direction='bottom'>

            <div className=' max-w-xl mb-20'>
              <Link target="_blank" href={"https://solovey.ru/barter/"}>

                <Image style={{ objectFit: 'cover', }} quality={20} className='project-images' src={photo2} alt='Project main page image'></Image>
              </Link>


            </div>
          </FadeInFromSide>

          <FadeInFromSide direction='bottom'>

            <div className='max-w-xl'>
              <Link target="_blank" href={"https://www.slovakiastudy.com/"}>

                <Image style={{ objectFit: 'cover' }} quality={40} className=' project-images' src={photo4} alt='Project main page image'></Image>
              </Link>
            </div>
          </FadeInFromSide>
        </div>
      </div>
    </div>
  </section >
}

export default PeojectsPage