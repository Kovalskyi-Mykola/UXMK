import { FC } from 'react'

interface PromoProps {

}

const Promo: FC<PromoProps> = ({ }) => {
    return <div className=' hidden md:block w-2/6 lg:w-2/5 space-y-10'>
        <span className='text-xl'>Our comunity projects</span>
        <div className='items-center flex justify-center rounded-md h-72 border bg-slate-300'> <span className='p-5 text-lg hidden'>Blog</span>  <span className='text-xl'>There is none fot now</span></div>
        <div className='rounded-md  h-72 border bg-slate-300 items-center flex justify-center'>  <span className='p-5 text-lg hidden'>Happy Life</span>  <span className='text-xl'>There is none fot now</span></div>
    </div >
}

export default Promo