"use client"
import { useEffect, useState, useRef } from 'react';
import './hero.css'
const Hero = () => {

    return (
        <>
            {/* hero section */}
            <div className="hero relative">
                <div className="heroWrapper relative">
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
                    <div className="heroSection  ">
                        <div className="heroSectionWrapper relative">
                            <div className="ellipseHero relative">
                                <img className='firstPng' src="/images/hero/first.png" alt="" />
                                {/* <img className='absolute  top-60 ' src="/images/hero/Ellipse 328.png" alt="" /> */}
                                <img className='absolute top-60 ellipse-2' src="/images/hero/Ellipse 329.png" alt="" />
                                <img className='absolute  top-80 ellipse-3' src="/images/hero/Ellipse 328.png" alt="" />

                            </div>
                            <div className=" z-30 flex items-center flex-col gap-14 justify-start md:pl-48 md:pt-28 ">
                                <div className="creativeWrapper creative flex flex-col z-30">
                                    <span>Creative UI & Full Stack</span>
                                    <span>developer Akhtar Ali khan</span>
                                    <span>Based in Pakistan</span>
                                </div>
                                <div className='hero_section_button z-20 flex items-center gap-8'>
                                    <button className='hire_me'>Hire me</button>
                                    <button className='download_cv'>Download CV</button>
                                </div>
                                <div className="solarHero absolute top-14 right-0">
                                    <img src="/images/hero/Group 1190.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar  ">
                        <div className="sidebar_wrapper fixed top-24">
                            <ul className='flex z-20 cursor-pointer flex-col items-center  h-full justify-around pt-36 pb-10'>
                                <li className='cursor-pointer'>
                                    <img className=' cursor-pointer' src="/images/sidebar/home.png" alt="" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/images/sidebar/person_outline.png" alt="" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/images/sidebar/work.png" alt="" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/images/sidebar/Phone_fill.png" alt="" />
                                </li>
                                <li className=' cursor-pointer'>
                                    <img src="/images/sidebar/search.png" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
export default Hero