import { FC } from 'react'



interface blockProps {
    children: React.ReactNode;

    isWhite?: boolean;

}

const Block: FC<blockProps> = ({ children, isWhite }) => {
    return <div className={` 
  
  ${isWhite ? `border-2 border-black text-black bg-none text-sm xl:text-lg font-bold` : `main_color_asbg`}  
  tracking-widest 
  flex items-center    element-scale  w-36 h-36 xl:w-48 xl:h-48 
  
  `}>
        <div className='m-auto relative'>
            {children}
        </div>

    </div>


}

export default Block