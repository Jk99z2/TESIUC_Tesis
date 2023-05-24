import Navigation from './Navigation'
import { useAuth } from '@/hooks/auth'

import GuestLayout from './GuestLayout'
import Pruebaside from '@/pages/pruebassidebar'
import { SidebarProvider } from './../../pages/sidebarcontext'


const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    
    return (
        <>
            <GuestLayout>
                <SidebarProvider>
                    <Navigation user={user} >
                        <Pruebaside>
                            { children }
                        </Pruebaside>
                    </Navigation>
                </SidebarProvider> 
            </GuestLayout>     
            

        
        
        </>
                
    )
}

export default AppLayout
