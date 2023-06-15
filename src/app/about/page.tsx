import Image from 'next/image'
import { FC } from 'react'
import Me from "@/../public/MyImage.png"
import Link from 'next/link'
interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return <section className=' flex flex-wrap items-center   md:min-h-screen  '>




    <div className=' border-t-2 space-y-5  '>

      <div className='mt-20 min-w-full text-4xl font-bold md:text-6xl mb-10'>Hello so good <br />
        to see you
      </div>

      <div className='mb-14 md:text-3xl text-xl'>
        I will explain
        how it works
      </div>
      <div>
        <Link target='_blank' href={"https://t.me/Penguin_kov"}>
          <span className=' absolute  px-10 py-4 bg-black text-white text-center '  >
            Contact me
          </span>
        </Link>
      </div>
    </div>

    <Image className='self-center md:-mt-52 border-b-8 border-black ' src={Me} alt='developer image ' ></Image>


  </section>
}

export default page