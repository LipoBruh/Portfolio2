import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderButton({ route,toggler,state}) {


  const navigate = useNavigate();
  
  const handleClick = () => {
    toggler(route)
    navigate(route.path)
  }


  return (
    <div
      className={"transition-all duration-500 headerHover"+((state == route)?" border-b-1 border-white":"") }
      onClick={handleClick}
    >
      <h3 className="headerButtons text-center text-stone-0  dark:text-white ">
        {route?.name || "Unnamed"}
      </h3>
    </div>
  );
}
