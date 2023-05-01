import { logo, logoblancoucol, logov} from "@/../public/assets/images/logo"
import Image from "next/image"
const ApplicationLogo = props => (
        <Image className="h-32 w-64" src={logo}/>
    
)
const ApplicationLogo2 = props => (
        <Image className="w-64 " src={logoblancoucol}/>
    
)
const ApplicationLogo3 = props => (
        <Image className=" w-72" src={logov}/>
    
)

export {
ApplicationLogo,
ApplicationLogo2,
ApplicationLogo3
}
