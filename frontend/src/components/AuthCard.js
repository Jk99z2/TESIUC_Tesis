const AuthCard = ({logo, children }) => (

        <div className="min-h-screen flex flex-col sm:justify-start items-center pt-6 sm:pt-0 bg-login">
            <div>{logo}</div>

            <div className="w-full mx-auto sm:max-w-md mt-4 px-4 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
)
const AuthCard2 = ({logo, children }) => (

    <div className="bg-login min-h-screen">
        <div className="min-h-screen flex flex-col sm:justify-start items-center pt-6 sm:pt-0 bg-login">
            

            <div className="w-full mx-auto sm:max-w-md mt-8 px-4  bg-white shadow-md overflow-hidden sm:rounded-lg">
                {logo}
                {children}
                
            </div>
        </div>
    </div>
)
export {
    AuthCard,
    AuthCard2
} 
