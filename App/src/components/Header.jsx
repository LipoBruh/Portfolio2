import ProfileFace from './ProfileFace'
import React, { useState, useEffect } from "react";
import ProfileText from './ProfileText';

export default function Header() {

    const [isToggled, setIsToggled] = useState(false);
    

    //toggle the effect upon loading
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsToggled(true);
      }, 500);
  
      // Cleanup the timeout on component unmount to prevent memory leaks
      return () => clearTimeout(timer);
    }, []);
  

  return (
    <div className='header grid grid-cols-10 pb-3' >

        <div className='col-span-3 w-full ' >
            <ProfileFace toggler={setIsToggled} isToggled={isToggled}  />
        </div>

        <div className='col-span-7 w-full ' >
            <ProfileText toggler={setIsToggled} isToggled={isToggled} />
        </div>

    </div>
  )
}
