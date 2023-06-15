import { ProfileForm } from '@/compontents/Form/FormRegistration'
import GetInTouch from '@/compontents/GetInTouch/GetInTouch'
import Promo from '@/compontents/ProjectPromo/Promo'
import { FC } from 'react'
interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (<section className='flex items-center justify-between' >
        <div className='space-y-10'>

            <ProfileForm></ProfileForm>
            <GetInTouch></GetInTouch>
        </div>
        <Promo></Promo>

    </section>)

}

export default page