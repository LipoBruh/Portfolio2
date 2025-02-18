import { Outlet } from "react-router-dom";
import "./styles/index.css";
import HeaderButton from "./components/HeaderButton";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";


function App(routes) {

    console.log(routes)

    const [isToggled, setIsToggled] = useState(false);


    return (
    <div className="grid w-full min-h-screen px-6 ">

        <div className="col-span-1">


            <div className="col-span-1">
                <Header/>
            </div>
        
        
            <div className={`grid grid-cols-${routes.routes.length} header`}>
                {/* Iterates over all the routes and generates a clickable header */}
                {routes.routes.map((route, index) => (
                    <HeaderButton route={route} key={index} toggler={setIsToggled} state={isToggled}>{route}</HeaderButton>
                ))}
            </div>

        </div>


        <div className="col-span-1 bg-neutral-800">
            <Outlet/>
        </div>


        <div className="header col-span-1">
            footer
        </div>

    </div>
    );
  }
  
  export default App;
  
  
