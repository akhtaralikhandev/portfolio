"use client"

import Slider from '../../components/slider/slider'
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
            <div className="aboutMe">
                <div className="aboutMeWrapper">
                    <div className="aboutMeCircle relative rounded-full overflow-hidden">
                        <div className='absolute  top-0 left-0'>
                            <img className='confident_' src="/images/hero/confident.png" alt="" />
                        </div>
                        <div className="aboutMeCircleWords flex flex-col gap-2  md:pl-80 md:pr-2">
                            <span className="aboutMeSpan">
                                About me
                            </span>
                            <div className='flex flex-col my_name_is'>
                                <span>My name is Sourasith Phomhome.</span>
                                <span>{"I'm a UI Designer and a instrutor"}</span>
                                <span>{" based in Montreal. I'm curently"}</span>
                                <span>{"working with Design+Code. I'm</span"}</span>
                                <span>passionate about creating digital</span>
                                <span>experiences and teaching design.</span>
                                <span>My goal is to help beginners to</span>
                                <span> grow their skills <span className='read_more cursor-pointer'>...read more</span></span>
                            </div>

                        </div>
                    </div>
                    <div className="illustration  ">
                        <img src="/images/about_me/illustration.png" alt="" />
                    </div>
                    <div className="big_small_circle absolute left-48">
                        <img src="/images/about_me/BG Small Circle.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="my_recent_work relative">
                <div className="my_recent_work_wrapper  flex flex-col items-center justify-center">
                    <span className='my_recent_work_span'>My recent work</span>
                    <Slider />
                    <img className='absolute small_big_circle' src="/images/works/BG Small Circle.png" alt="" />
                    <img className='absolute small_big_circle1' src="/images/works/BG Small Circle.png" alt="" />

                </div>
            </div>
        </>

    )
}
export default Hero