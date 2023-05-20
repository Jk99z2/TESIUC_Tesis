import { pixel, literatu, } from "@/../public/assets/images/all-img"
import Image from "next/image"
const AuthCard = ({logo, children }) => (

    <div className="bg-[#1A8B9D] h-[93vh] xl:h-[88vh] xl:flex">
        <div>
        <Image className=" hidden xl:block xl:w-[1000px] xl:h-[88vh]" src={literatu} alt='Imagen de LoginPREvio'/>
        </div>
        <div className=" xl:flex xl:justify-center xl:my-auto xl:mx-auto  ">
            <div className=" pt-1  flex flex-col items-center">
                <div className="bg-white flex flex-col items-center m-3 mt-16 xl:m-0  py-10 rounded-3xl overflow-hidden drop-shadow-lg 
                                max-w-xl lg:py-8 ">
                    {logo}
                    {children}
                </div>
            </div>
        </div>
        
    </div>       
)
const AuthCard2 = ({logo, children }) => (

    <div className="bg-[#1A8B9D] h-[93vh] xl:h-[88vh] xl:flex">
        
        <div className=" xl:flex xl:justify-center xl:my-auto xl:mx-auto  ">
            <div className=" pt-1  flex flex-col items-center">
                <div className="bg-white flex flex-col items-center m-3 mt-16 xl:m-0  py-10 rounded-3xl overflow-hidden drop-shadow-lg 
                                max-w-xl lg:py-8 ">
                    {logo}
                    {children}
                </div>
            </div>
        </div>
        <div className="w-[50%]">
        <Image className=" hidden pr-14 pb-5 xl:block xl:w-[1000px] xl:h-[88vh]" src={pixel} alt='Imagen de LoginPREvio'/>
        </div>
        
    </div>       
)
export {
    AuthCard,
    AuthCard2,
} 
