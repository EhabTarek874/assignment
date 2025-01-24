import React from "react";
import style from "./Portfolio"
import poert1 from "../../assets/poert1.png"
import poert2 from "../../assets/port2.png"
import poert3 from "../../assets/port3.png"

export default function Portfolio(){
    return (
        <>
            
        <h1 className="mt-10 text-center text-5xl text-slate-700 font-bold">PORTFOLIO COMPONENT</h1>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 p-20">

    <div className="group hover:bg-emerald-500  rounded-lg transition duration-1000 cursor-pointer">
        <img src={poert1} alt="" className="h-auto max-w-full rounded-lg group-hover:opacity-30" />
    </div>
    <div className="group hover:bg-emerald-500  rounded-lg transition duration-1000 cursor-pointer">
        <img src={poert2} alt="" className="h-auto max-w-full rounded-lg group-hover:opacity-30" />
    </div>
    <div className="group hover:bg-emerald-500  rounded-lg transition duration-1000 cursor-pointer">
        <img src={poert3} alt="" className="h-auto max-w-full rounded-lg group-hover:opacity-30" />
    </div>
    <div className="group hover:bg-emerald-500  rounded-lg transition duration-1000 cursor-pointer">
        <img src={poert1} alt="" className="h-auto max-w-full rounded-lg group-hover:opacity-30" />
    </div>
    <div className="group hover:bg-emerald-500  rounded-lg transition duration-1000 cursor-pointer">
        <img src={poert2} alt="" className="h-auto max-w-full rounded-lg group-hover:opacity-30" />
    </div>
    <div className="group hover:bg-emerald-500  rounded-lg transition duration-1000 cursor-pointer">
        <img src={poert3} alt="" className="h-auto max-w-full rounded-lg group-hover:opacity-30" />
    </div>
</div>

        </>
    )
}