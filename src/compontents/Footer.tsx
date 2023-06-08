import Link from 'next/link'
import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <div className=' px-5 lg:block'>
        <div className='border w-full  my-20'></div >

        <div className='flex  flex-col sm:flex-row justify-between text-center sm:text-left  '>
            <div className='hidden lg:block m-auto'>
                <div className='relative  flex items-center  gap-3  text-center '>

                    <div className='font-bold h-full flex text-center items-center align-middle tracking-widest'>
                        <a href="">UXMK</a>
                        <div className='absolute w-9 h-9 border-black border-2 -left-2 '></div>
                    </div>
                    <div className='h-1/2 border border-black w-0 '>

                    </div>
                    <div className='text-left text-xs md:text-sm font-bold'>
                        <h2>
                            User Experience <br />
                            for businesses

                        </h2></div>

                </div>
                <div className='py-10 tracking-widest uppercase text-sm'> Future Already Exist</div>
            </div>

            <div className='flex gap-7 flex-col self-center m-auto header-text text-lg text-center'>
                {/* <h2>Projects</h2> */}
                <Link href={"/"}>


                    <h2>Home</h2>
                </Link>
                <Link href={"about"}>

                    <h2 className='px-10 py-3 bg-black text-white'>Contacts</h2>
                </Link>
            </div>

            <div className='hidden lg:block m-auto max-w-sm'>
                <p className='text-2xl font-bold mb-10 '>
                    Looking for professional designers?
                </p>
                <div className=' tracking-widest'> We are able to become a part of your team <Link href={"about"}>
                    <div className=''>


                        <span className=' font-bold underline '> Hire us</span>
                    </div>
                </Link>
                </div>
            </div>

        </div>
        <div className='my-20 border w-full'></div></div >
}

export default Footer