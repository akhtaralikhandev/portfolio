"use client"
import { useEffect, useState, useRef } from 'react';
import './hero.css'
const Hero = () => {

    return (
        <>
            {/* hero section */}
            <div className="hero">
                <div className="heroWrapper">
                    {/* NAVBAR */}
                    <div className="navbar md:pl-60 md:pr-60 md:p-8">
                        <div className="navbar_wrapper">
                            <ul className="navbar_list z-10 flex items-center justify-between">
                                <li>Home</li>
                                <li>About me</li>
                                <li>  <img src="/images/navbar/Logo name.png" alt="" /></li>
                                <li>Work</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="heroSection  h-screen">
                        <div className="heroSectionWrapper">
                            <div className="ellipseHero relative">
                                <img className='firstPng' src="/images/hero/first.png" alt="" />
                                {/* <img className='absolute  top-60 ' src="/images/hero/Ellipse 328.png" alt="" /> */}
                                <img className='absolute top-60 ellipse-2' src="/images/hero/Ellipse 329.png" alt="" />
                                <img className='absolute  top-80 ellipse-3' src="/images/hero/Ellipse 328.png" alt="" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Hero