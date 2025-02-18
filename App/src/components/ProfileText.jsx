import React from 'react'
import { HEADER } from '../assets/assets'
export default function ProfileText({toggler, isToggled}) {
  
  
    return (

    
    <div className=' m-auto'>

        
        <div  className=' mx-2 mt-5'>

            {/* White border */}
            <div className='border-b-1 border-white text-center p-3 '>

                <h1 className="cursor-pointer text-6xl font-light dark:text-white" onClick={() => toggler(!isToggled)}>Émanuel Rollin</h1>

            </div>


            {/* Text */}
            <div

            className={`headerCLI rounded-b-lg  overflow-hidden transition-all duration-500   ${isToggled?'max-h-30' : 'max-h-0'}`}
            onClick={() => toggler(!isToggled)}
            >

            <div className='grid grid-cols-2'>

                {/* Left column */}
                <div className='col-span-1'>
                    <div className='grid grid-cols-1' >
                        
                        {HEADER.education.map( 
                            (e,index) => (
                                <div key={index} className='col-span-1'> <p className='p-1 break-normal'>{e}</p> </div>
                            ) 
                        )}
                    
                    </div>
                </div>

                {/* Right column */}
                <div className='col-span-1'>
                    <div className='grid grid-cols-1' >
                        
                        {Object.entries(HEADER.links).map( 
                            ([key,e],index) => (
                                <div key={index} className={'col-span-1'}> 
                                    <img src={e.src} className='inline max-w-[5]' fill="white" ></img>
                                    <a className='inline' href = {e.URL} target='_blank'>
                                        <p className='p-1 break-normal inline'>{e.alt}</p>
                                    </a> 
                                </div>
                            ) 
                        )}
                    
                    </div>
                </div>


            </div>
                
            </div>
        </div>
    </div>
  )
}
