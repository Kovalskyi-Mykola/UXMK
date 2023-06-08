'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { FC } from 'react'
import arrow from '@/../public/chechMark.svg'


interface WhoAreWeProps {}

const WhoAreWe: FC<WhoAreWeProps> = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    // Check if the document is ready before adding the scroll event listener
    if (document.readyState === 'complete') {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('load', () => {
        window.addEventListener('scroll', handleScroll);
      });
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const props = '   mx-5 w-full lg:w-96 about-block h-44 text-slate-200 px-14 relative items-center flex justify-center main_color_asbg';

  return (
    <div className="relative mb-10 md:mb-52 block md:hidden  xl:block lg:mb-80">
      <div className="text-white">a</div>
      <div style={{ left: 300 - scrollPosition }} className="flex flex-wrap md:flex-nowrap justify-center xl:absolute overflow-visible gap-10">
        <div className={`${props}`}>
          <Image style={{ position: 'absolute', left: 15, top: 15 }} src={arrow} alt="checkMark" />
          We solve difficult problems and provide effective client-oriented solutions.
        </div>
        <div className={`${props}`}>
          <Image style={{ position: 'absolute', left: 15, top: 15 }} src={arrow} alt="checkMark" />
          We solve difficult problems and provide effective client-oriented solutions.
        </div>
        <div className={`${props}`}>
          <Image style={{ position: 'absolute', left: 15, top: 15 }} src={arrow} alt="checkMark" />
          We help businesses grow through embedding smart design into digital services.
        </div>
        <div className={`${props} hidden xl:flex`}>
          <Image style={{ position: 'absolute', left: 15, top: 15 }} src={arrow} alt="checkMark" />
          We make interfaces from scratch using our experience and professionalism.
        </div>
        <div className={`${props} hidden xl:flex`}>
          <Image style={{ position: 'absolute', left: 15, top: 15 }} src={arrow} alt="checkMark" />
          We create a perfect user interface design aimed at digital dialogue with the client.
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;