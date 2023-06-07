import { FC } from 'react'
import Image from 'next/image'

import arrow from '@/../public/aboutuspic.png'
interface WhoWeAreMobileProps {

}
let props = 'w-96 about-block  h-44 text-slate-200 px-14 relative  items-center flex justify-center  main_color_asbg'

const WhoWeAreMobile: FC<WhoWeAreMobileProps> = ({ }) => {
  return <div className={` mb-28 -my-10 hidden lg:block xl:hidden mx-5 `} >
    <div className='text-white'>a</div>
        <Image src={arrow} alt='About us'></Image>
  </div>
}

export default WhoWeAreMobile