import React from 'react'
import Footerdash from '../footerdash'

export default function Cuerpo({header,children,color}) {
    return (
        <>
            <div className="grid  grid-rows-[1fr,60px] lg:grid-rows-[1fr,70px]">
                <div>
            
                    <header className={`${color} `}>
                        <div className="max-w-7xl  py-2   mx-6">
                            {header}
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className='m-8'>{children}
                    
                    </main>            
                </div>
                <Footerdash/>
            </div>     
        </>
    )
                        
}