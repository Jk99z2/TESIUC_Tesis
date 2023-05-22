import { logot, logoblancoucol, logov} from "@/../public/assets/images/logo"
import Image from "next/image"
const ApplicationLogo = ({props,className}) => (
        <Image className={`${className} h-auto `} src={logot} alt="Logo TESIUC en negro"/>
    
)
const ApplicationLogo2 = ({props,className}) => (
        <Image className={`${className} h-auto  `} src={logoblancoucol} alt="Logo de la UCOL en blanco"/>
    
)
const ApplicationLogo3 = ({props,className}) => (
        <Image className={`${className} h-auto  `} src={logov} alt="Logo TESIUC blanco"/>
    
)

export {
ApplicationLogo,
ApplicationLogo2,
ApplicationLogo3
}
