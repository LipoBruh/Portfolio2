import React from 'react'
import Carrousel from '../components/Carrousel'
import CLI from '../components/CLI'
import { BODY } from '../assets/assets'


export default function Page({route}) {

  let projects = BODY[route.name].projects
  let description = BODY[route.name].description

  return (



    <div className='h-full '>

      <div className='grid grid-cols-1 h-full grid-rows-4 m-auto' >
        {/* Top caroussel */}
        <div className=' col-span-1 row-span-3 flex items-center' >
          <Carrousel projects={projects}/>
        </div>

        {/* Bottom description */}
        <div className=' col-span-1  row-span-1 flex items-center header' >
          <CLI desc = { description} />
        </div>
      </div>

    </div>
  )
}
