import React, { useState, useEffect } from "react";


export default function CLI({desc}) {

  //Buttons
  const [isToggled, setIsToggled] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  //typing effect
  const [typedText, setTypedText] = useState(""); // Text appearing letter by letter
  const [isTypingDone, setIsTypingDone] = useState(false); // Check if typing is finished
  const [showUnderscore, setShowUnderscore] = useState(true); // For blinking effect
  const [index, setIndex] = useState(0);

  

//refresh upon desc update
  useEffect(() => {
    setTypedText("");
    setIndex(0);
  }, [desc]); 
  

  //typing
  useEffect(() => {
    if (index < desc.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + desc[index]); 
        setIndex((prevIndex) => prevIndex + 1); 
      }, 10);
      return () => clearTimeout(timeout);
    }
    setIsTypingDone(true);
  }, [index, desc]); // Depend on `index` & `desc`
  


  //blinking
  useEffect(() => {
    if (!isTypingDone) return; 

    const blinkInterval = setInterval(() => {
      setShowUnderscore((prev) => !prev);
    }, 500); // speed

    return () => clearInterval(blinkInterval); 
  }, [isTypingDone]);



  return (
            <div  className={`w-150 mx-auto transition-all duration-500 ${isClosed?' scale-0' : ' scale-100' }`}>
    
                {/* White border */}
                <div className='border-b-1 border-white text-center p-1 bg-stone-800 flex justify-end'>
    
                  {/* minimize */}
                   <div className='cursor-pointer col-span-1 h-[30px]  ' onClick={() => setIsToggled(false)}>

                    <img src="icons/dash.svg" alt="close" className="h-8 w-8 m-auto " />

                   </div>
                   
                  {/* expand */}
                  <div className='cursor-pointer col-span-1 h-[30px] ' onClick={() => setIsToggled(true)}>
                  
                    <img src="icons/square.svg" alt="close" className="h-full w-4  " />

                  </div>

                  {/* X */}
                  <div className='cursor-pointer col-span-1 h-[30px] ' onClick={() => setIsClosed(true)}>

                    <img src="icons/x.svg" alt="close" className="h-8 w-8 m-auto " />

                  </div>  
    

                </div>
    
    
                {/* Text */}
                <div className={`headerCLI rounded-b-lg  overflow-hidden transition-all duration-500 ${isToggled?' max-h-50 ' : 'max-h-0 ' }`} > 
                  <p className="p-2">{typedText}{isTypingDone && showUnderscore && "_"}</p>
                </div>

            </div>
  )
}
