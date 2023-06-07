import { FC } from 'react'



interface blockProps {
    children: React.ReactNode;

    isWhite?: boolean;

}

const Block: FC<blockProps> = ({ children, isWhite }) => {
    return <button className={` 
  
  ${isWhite ? `border-2 border-black text-black bg-none text-sm xl:text-lg font-bold` : `main_color_asbg`}  
  tracking-widest 
  flexitems-center    element-scale  w-36 h-36 xl:w-48 xl:h-48 
  
  `}>
        <p className='m-auto relative'>
            {children}
        </p>

    </button>


}

export default Block