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


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can perform your data sending logic here

        console.log(formData);

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: '',
        });

    };



    return <div className='px-5 lg:px-0'>

        <span className='tracking-widest text-base sm:text-lg mt-10'>OUR <h3 className='inline-block'>CONTACT</h3></span>
        <h3 className=' mt-5 mb-10 text-2xl sm:text-4xl font-bold'>Get In Touch</h3>





        <div className='flex flex-wrap items-center justify-between '>
            <FadeInFromSide >
                <div className=''>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-5 sm:mb-10'>
                            <label className='text-lg block' htmlFor="name">Your name</label>
                            <input className='px-5 text-xl  w-full h-14 sm:h-16 border border-black '
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-5 sm:mb-10' >
                            <label className='text-lg block' htmlFor="email">Email</label>
                            <input className='px-5 text-xl w-full  h-14 sm:h-16 border border-black'
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mb-5 sm:mb-10'>
                            <label className='text-lg block' htmlFor="message">What is your  budget? </label>
                            <input className='px-5 text-xl   w-full  h-14 sm:h-16 border border-black'
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></input>
                        </div>

                        <button className=' my-5 main_color_asbg font-bold text-slate-200 text-xl  w-full  h-14 sm:h-16 border  border-black' type="submit">SEND</button>
                    </form>
                    <div className=' my-5 text-base sm:text-xl tracking-widest'>By clicking the button you agree our <span className=' text-xl tracking-widest underline-text '> <Link href={"privacy"}>Privacy Policy  </Link></span> </div>
                </div>

            </FadeInFromSide>
            <FadeInFromSide direction='left' >

                <div>
                    <div className=' mb-10 md:mb-20'>
                        <span className='text-lg my-5 block'>Email us</span>
                        <p className='text:lg sm:text-2xl font-bold'>mykola200410@gmail.com</p>
                    </div>



                    <div className='mb-10 md:mb-20'>
                        <span className='text-lg my-5 block'>Ukraine</span>
                        <p className='text:lg sm:text-2xl font-bold'>+380 99 366 26 52</p>
                    </div>

                    <div className='mb-10 md:mb-20 flex items-center gap-5'>
                        <div>
                            <span className='text-lg my-5 block'>Canada</span>
                            <p className='text:lg sm:text-2xl font-bold'>+1 647 609 6043</p>
                        </div>
                        <div className='flex gap-5'>
                            <a href="">
                                <Image src={telegram} alt='SocaialMedia'></Image>
                            </a>
                            <a href="">
                                <Image src={whatsUp} alt='SocaialMedia'></Image>
                            </a>
                        </div>
                    </div>

                </div>
            </FadeInFromSide>

        </div>
    </div>
}
export default GetInTouch