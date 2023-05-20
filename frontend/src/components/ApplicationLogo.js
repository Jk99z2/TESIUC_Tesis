import { logot, logoblancoucol, logov} from "@/../public/assets/images/logo"
import Image from "next/image"
const ApplicationLogo = props => (
        <Image className=" md:w-72 h-auto w-36" src={logot} alt="Logo TESIUC en negro"/>
    
)
const ApplicationLogo2 = props => (
        <Image className="h-auto w-36 md:w-56 " src={logoblancoucol} alt="Logo de la UCOL en blanco"/>
    
)
const ApplicationLogo3 = props => (
        <Image className=" h-auto w-36  md:w-72 " src={logov} alt="Logo TESIUC blanco"/>
    
)

export {
ApplicationLogo,
ApplicationLogo2,
ApplicationLogo3
}
