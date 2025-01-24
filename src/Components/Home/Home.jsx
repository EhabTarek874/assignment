import React from "react";
import style from "./Home.module.css"
import image from "../../assets/avataaars.svg"

export default function Home(){
    return (
        <>

            <div className="bg-emerald-400 h-screen text-center ">
                <img src={image} className=" w-1/6 m-auto  mt-10" />
                <h1 className="text-4xl font-bold text-white mt-9 ">START FRAMEWORK</h1>



                <p className="text-white mt-4">Graphic Artist - Web Designer - Illustrator</p>
            </div>
            
            
             
        </>
    )
}