const AuthCard = ({logo, children }) => (

        <div className="bg-[#1A8B9D] h-screen 2xl:bg-no-repeat 2xl:bg-cover xl:bg-center xl:bg-[url('../../public/assets/images/all-img/gradu.png')]">
            <div className=" pt-1 h-screen flex flex-col items-center  ">
                <div className="bg-white flex flex-col items-center m-3 mt-16 py-14 rounded-3xl overflow-hidden drop-shadow-lg 
                                max-w-xl lg:py-8 ">
                    {logo}
                    {children}
                    {/*  lg: justify-center        */}
                </div>
            </div>
        </div>
)
const AuthCard2 = ({logo, children }) => (

    <div className="bg-[#1A8B9D] h-screen 2xl:bg-no-repeat 2xl:bg-cover xl:bg-center xl:bg-[url('../../public/assets/images/all-img/gradu.png')]">
        <div className=" pt-1 h-screen flex flex-col items-center  ">
            <div className="bg-white flex flex-col items-center m-3 mt-16 py-10 rounded-3xl overflow-hidden drop-shadow-lg 
                             max-w-xl lg:py-8 ">
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
