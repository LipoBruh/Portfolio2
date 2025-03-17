import { Outlet } from "react-router-dom";
import "./styles/styles.css";
import HeaderButton from "./components/HeaderButton";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";


function App(routes) {

    const [isToggled, setIsToggled] = useState(false);
    
    console.log(routes.routes.length)

    return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full grid-cols-1  min-h-screen px-6 max-w-[1000px] mx-auto">

        <div className="col-span-1">


            <div className="col-span-1">
                <Header/>
            </div>
        
        
            <div className={`flex header`} > 
                {/* Iterates over all the routes and generates a clickable header */}
                {routes.routes.map((route, index) => (
                    route.name !== "Home" ? (
                        <HeaderButton route={route} key={index} toggler={setIsToggled} state={isToggled} >
                        {route}
                        </HeaderButton>
                    ) : null
                ))}
            </div>

        </div>


        <div className="col-span-1 min-h-full  bg-neutral-800 " >
            <Outlet context={isToggled} />
        </div>


        <div className="header col-span-1 h-3 mb-3">
            
        </div>

    </div>
    );
  }
  
  export default App;
  
  
