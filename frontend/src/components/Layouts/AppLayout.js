import Navigation from './Navigation'
import { useAuth } from '@/hooks/auth'
import Navigationsidebar from './Navigationsidebar'


const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100">
            <div className='flex flex-col'>
                <Navigation user={user} />
                <Navigationsidebar user={user} />
            </div>
            

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}
            
            </main>
        </div>
    )
}

export default AppLayout
