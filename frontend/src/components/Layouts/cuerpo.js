import React from 'react'
import Footerdash from '../footerdash'

export default function Cuerpo({header,children,color}) {
    return (
        <>
            <div className="grid  grid-rows-[1fr,60px] lg:grid-rows-[1fr,70px]">
                <div className=''>
                    <header >
                        <div className="  py-2 px-8 bg-green-200 border-b-4  border-gray-700">
                            {header}
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className=''>
                        {children}
                    
                    </main>            
                </div>
                <Footerdash/>
            </div>     
        </>
    )
                        
}