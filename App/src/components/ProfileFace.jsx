import { HEADER } from '../assets/assets'

export default function ProfileFace({toggler, isToggled}) {

  return (
    <div className="p-1 max-w-max m-auto ">

        <img className={`cursor-pointer rounded-full ${isToggled?"w-45 h-45":"w-35 h-35"} bg-white p-[1px] transition-all duration-500 hover:p-[2px]`}
          src={HEADER.PFP.src} 
          alt={HEADER.PFP.alt} 
          onClick={() => toggler(!isToggled)}
        />

    </div>
  )
}
