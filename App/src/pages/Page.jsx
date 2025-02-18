import React from 'react'
import Carrousel from '../components/Carrousel'
import CLI from '../components/CLI'


export default function Page({route}) {
  return (


    <div className='h-full 'style={{"background-color": "red"}}>

      <div className='grid grid-cols-1 h-full grid-rows-4 m-auto' style={{"background-color": "blue"}}>
        {/* Top caroussel */}
        <div className=' col-span-1 row-span-3 flex items-center' >
          <Carrousel/>
        </div>

        {/* Bottom description */}
        <div className=' col-span-1  row-span-1 flex items-center bg-green-400' >
          <CLI/>
        </div>
      </div>

    </div>
  )
}
