import React from "react";
import style from "./Footer"

export default function Footer(){
    return (
        <>  
             <div className="bg-slate-700 border-gray-200   py-5 text-center text-white w-screen">
                <div className="flex flex-wrap items-center p-16">
                    <div className="w-full sm:w-1/2 md:w-1/3">
                        <h1 className=" mb-2 font-semibold text-3xl">LOCATION</h1>
                        <p>2215 John Daniel Drive</p>
                        <p className="mt-2">Clark, MO 65243</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 py-8">
                        <h1 className="mb-1 text-3xl font-semibold">AROUND THE WEB</h1>
                        <span class="fa-stack">
                            <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </span>
                        <span class="fa-stack">
                            <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-brands fa-x-twitter"></i>
                        </span>
                        <span class="fa-stack">
                            <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </span>
                        <span class="fa-stack">
                            <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-solid fa-globe"></i>
                        </span>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 ">
                        <h1 className="font-semibold text-3xl">ABOUT FREELANCER</h1>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                    </div>

                <footer className="bg-slate-900 py-5">
                    <h6>Copyright © Your Website 2021</h6>
                </footer>    
                
            </div>  

         

        </>
    )
}