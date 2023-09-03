"use client"
import { useRef, useState } from 'react'
import Slider from '../../components/slider/slider'
import './hero.css'
const Hero = () => {
    const [openSideBar, setOpenSideBar] = useState(10)
    const [navHeight, setNavHeight] = useState('h-0')
    const home = useRef<HTMLInputElement>(null);
    const about = useRef<HTMLInputElement>(null)
    const work = useRef<HTMLInputElement>(null)
    const contact = useRef<HTMLInputElement>(null)
    const footer = useRef<HTMLInputElement>(null)
    const toggleNavbar = () => {
        if (navHeight === "h-48") {
            setNavHeight("h-0")
        } else {
            setNavHeight("h-48")
        }
    }
    const handleClick = () => {
        if (work.current !== null) {
            work.current.scrollIntoView({ behavior: 'smooth' });
        }

    }
    const handleClick2 = () => {
        if (home.current !== null) {
            home.current.scrollIntoView({ behavior: 'smooth' });
        }

    }
    const handleClick3 = () => {
        if (about.current !== null) {
            about.current.scrollIntoView({ behavior: 'smooth' });
        }

    }
    const handleClick4 = () => {
        if (contact.current !== null) {
            contact.current.scrollIntoView({ behavior: 'smooth' });
        }

    }
    const toggleSidebar = () => {
        if (openSideBar === 80) {
            setOpenSideBar(10)
        } else {
            setOpenSideBar(80)
        }

    }
    return (
        <>
            {/* hero section */}
            <div ref={home} className="hero relative">
                <div className="heroWrapper relative">
                    {/* NAVBAR */}
                    <div className="navbar   lg:pl-60 lg:pr-60 pl-8 pr-8 p-4 lg:p-8">
                        <div className="navbar_wrapper flex  items-start justify-between">
                            <div className='lg:hidden block'>
                                <img src="/images/navbar/Logo name.png" alt="" />
                            </div>
                            <span className='absolute lg:hidden block right-8 top-8 text-white text-3xl cursor-pointer'>
                                {navHeight === "h-48" ? <i onClick={() => toggleNavbar()} className="fa fa-close" aria-hidden="true"></i> : <i onClick={() => toggleNavbar()} className="fa fa-bars" aria-hidden="true"></i>}
                            </span>
                            <ul className={`navbar_list w-full overflow-hidden lg:h-12 ${navHeight} lg:mt-0 mt-14 lg:flex  flex lg:flex-row  gap-4 flex-col items-end lg:items-center lg:justify-between`}>
                                <li onClick={() => handleClick2()}>Home</li>
                                <li onClick={() => handleClick3()}>About me</li>
                                <li className='lg:block hidden' onClick={() => handleClick2()}>  <img src="/images/navbar/Logo name.png" alt="" /></li>
                                <li onClick={() => handleClick()}>Work</li>
                                <li onClick={() => handleClick4()}>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="heroSection   ">
                        <div className="heroSectionWrapper relative">
                            <div className="ellipseHero relative">
                                <img className='firstPng lg:h-60 md:h-40 h-32 ' src="/images/hero/first.png" alt="" />
                                {/* <img className='absolute  top-60 ' src="/images/hero/Ellipse 328.png" alt="" /> */}
                                <img className='absolute top-60 ellipse-2' src="/images/hero/Ellipse 329.png" alt="" />
                                <img className='absolute  top-80 ellipse-3' src="/images/hero/Ellipse 328.png" alt="" />
                            </div>
                            <div className=" z-20 flex items-center flex-col gap-14 justify-start md:pl-48 md:pt-28 ">
                                <div className="creativeWrapper lg:text-6xl md:text-4xl text-xl creative flex flex-col z-30">
                                    <span>Creative UI & Full Stack</span>
                                    <span>developer Akhtar Ali khan</span>
                                    <span>Based in Pakistan</span>
                                </div>
                                <div className='hero_section_button z-20 flex items-center gap-8'>
                                    <button className='hire_me md:pl-16 pl-5 pr-5 p-2 md:p-3 md:pr-16'>Hire me</button>
                                    <button className='download_cv md:pl-10 pl-5 pr-5 p-2 md:p-3 md:pr-10'>Download CV</button>
                                </div>
                                <div className="solarHero absolute top-14 right-0">
                                    <img src="/images/hero/Group 1190.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar  overflow-hidden  ">

                        <div style={{ width: openSideBar }} className={`sidebar_wrapper    -z-50  fixed top-24`}>
                            <ul className='flex   cursor-pointer flex-col items-center  h-full justify-around pt-36 pb-10'>
                                <li onClick={() => {
                                    console.log("hallo ")
                                    toggleSidebar()
                                }} className='h-12  justify-center w-12 flex items-center rounded-full absolute top-0 -right-12 bg-white'>
                                    <img className='h-8 ' src="/images/sidebar/sidebar.png" alt="" />
                                </li>
                                <li onClick={() => {
                                    console.log("clicked")
                                }} className='cursor-pointer'>
                                    <img className=' cursor-pointer' src="/images/sidebar/home.png" alt="" />
                                </li>
                                <li onClick={() => handleClick3()} className=' cursor-pointer'>
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
            <div ref={about} className="aboutMe bg-white md:mt-48 mt-4">
                <div className="aboutMeWrapper">
                    <div className="aboutMeCircle relative rounded-full overflow-hidden">
                        <div className='absolute  top-0 left-0'>
                            <img className='confident_' src="/images/hero/confident.png" alt="" />
                        </div>
                        <div className="aboutMeCircleWords flex pl-8 flex-col gap-2  md:pl-80 md:pr-2">
                            <span className="aboutMeSpan md:text-xl text-lg">
                                About me
                            </span>
                            <div className='flex flex-col my_name_is md:text-lg text-sm'>
                                <span>My name is Sourasith Phomhome.</span>
                                <span>{"I'm a UI Designer and a instrutor"}</span>
                                <span>{" based in Montreal. I'm curently"}</span>
                                <span>{"working with Design+Code. I'm"}</span>
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
            <div ref={work} className="my_recent_work relative">
                <div className="my_recent_work_wrapper  flex flex-col items-center justify-center">
                    <span className='my_recent_work_span'>My recent work</span>
                    <Slider />
                    <img className='absolute small_big_circle' src="/images/works/BG Small Circle.png" alt="" />
                    <img className='absolute small_big_circle1' src="/images/works/BG Small Circle.png" alt="" />

                </div>
            </div>
            <div ref={contact} className="contact_me">
                <div className="contact_me_wrapper md:flex-row flex-col flex gap-4 md:pl-28 md:pr-28 md:p-12">
                    <div className="leftContact flex-1 flex flex-col gap-14 md:p-0 p-8">
                        <div className='flex flex-col gap-6 '>
                            <span className='get_in_touch_span'>Get in touch</span>
                            <div className='approachable flex flex-col'>
                                <span>{"I'm very approachable and"}</span>
                                <span>{"would love to speak to you."}</span>
                                <span>{"Feel free to call, send me an"}</span>
                                <span>{"email . Follow me in social media or"}</span>
                                <span>{"simply complete the enquiry form."}</span>
                            </div>
                        </div>
                        <div className="contact_me_icons flex flex-col gap-4">
                            <img src="/images/contact/Frame 3532.png" alt="" />
                            <img src="/images/contact/Frame 3533.png" alt="" />
                        </div>
                    </div>
                    <div className="rightContact relative flex-1 md:p-0 p-8">
                        <form className='flex flex-col gap-4 '>
                            <span className="send_me_a_message_span">Send me a message</span>
                            <input className='input outline-none' placeholder='Name' type="text" />
                            <input className='input outline-none' placeholder='Email Address' type="email" />
                            <input className='input outline-none' placeholder='Subject' type="text" />
                            <textarea className='textarea outline-none' placeholder='write message here'></textarea>
                            <button className="button_input cursor-pointer">Send message</button>
                        </form>
                        <div className='absolute top-60'>
                            <img className='group_1199 ' src="/images/contact/Group 1199.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="footer  z-70  mt-40">
                <div className="footerWrapper relative flex flex-col md:p-14 p-8 items-center md:gap-12 gap-6 justify-center ">
                    <img className='absolute md:block hidden  left-32  top-0 h-32' src="/images/footer/6.png" alt="" />
                    <ul className='flex  md:pl-32 md:pr-32 pl-0 pr-0 md:flex-nowrap flex-wrap  items-center justify-between md:gap-24 gap-4'>
                        <li className='flex items-center gap-2 md:text-xl text-sm'>
                            <img src="/images/footer/home.png" alt="" /> Home
                        </li>
                        <li className='flex items-center gap-2 md:text-xl text-sm'>
                            <img src="/images/footer/person_outline.png" alt="" /> About me
                        </li>
                        <li className='flex items-center gap-2 md:text-xl text-sm'>
                            <img src="/images/footer/work.png" alt="" /> work.png
                        </li>
                        <li className='flex items-center gap-2 md:text-xl text-sm'>
                            <img src="/images/footer/Phone_fill.png" alt="" /> Contact
                        </li>
                    </ul>
                    <ul className='flex  md:pl-32 md:pr-32  items-center justify-center md:gap-4 gap-4'>
                        <li>
                            <a href="https://www.instagram.com/react_node_developer/" target='_blank'>
                                <img className='ul_li_social' src="/images/footer/Instagram.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <img className='ul_li_social' src="/images/footer/Twitter.png" alt="" />
                        </li>
                        <li>
                            <img className='ul_li_social' src="/images/footer/Linkedin.png" alt="" />
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=61550939720046" target='_blank'>
                                <img className='ul_li_social' src="/images/footer/Facebook.png" alt="" /></a>
                        </li>
                    </ul>
                    <div className="separator w-full pl-14 pr-14"></div>
                    <div className="footer_bottom flex items-end justify-end w-full">
                        <span className="copy_right">Terms of Service - Privacy Policy</span>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Hero