"use client";
import { useRef, useState } from "react";
import Slider from "../../components/slider/slider";
import { ColorRing } from 'react-loader-spinner'
import axios from 'axios'
import "./hero.css";
const Hero = () => {
    const [openSideBar, setOpenSideBar] = useState(10);
    const [loading, setLoading] = useState(false)
    const [navHeight, setNavHeight] = useState("h-0");
    const home = useRef<HTMLInputElement>(null);
    const about = useRef<HTMLInputElement>(null);
    const work = useRef<HTMLInputElement>(null);
    const contact = useRef<HTMLInputElement>(null);
    const footer = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const downloadCV = () => {
        // Construct the URL to the PDF file in the public folder.
        const pdfURL =
            "https://drive.google.com/file/d/13pu3FK6yFx9szdWpaNM9638XrSI6m3pP/view";
        const link = document.createElement("a");
        link.href = pdfURL;
        // link.download = 'your-cv.pdf'; // Specify the desired file name for download.
        link.click();
    };
    const toggleNavbar = () => {
        if (navHeight === "h-48") {
            setNavHeight("h-0");
        } else {
            setNavHeight("h-48");
        }
    };
    const handleclickWork = () => {
        if (work.current !== null) {
            work.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleClickHome = () => {
        if (home.current !== null) {
            home.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleClickAbout = () => {
        if (about.current !== null) {
            about.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleClickContact = () => {
        if (contact.current !== null) {
            contact.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const toggleSidebar = () => {
        if (openSideBar === 80) {
            setOpenSideBar(10);
        } else {
            setOpenSideBar(80);
        }
    };
    const handleEmailSubmit = async (e: any) => {
        e.preventDefault();
        if (name && email && subject && message) {
            setLoading(true)
            try {
                const post = await axios.post("https://formspree.io/f/mwkdbwvw", {
                    name: name,
                    subject: subject,
                    message: message
                })

                if (post.status === 200) {
                    setLoading(false)
                    alert("email sent")
                }

            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        else {
            alert("plz fill all the inputs")
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
                            <div className="lg:hidden block">
                                <img src="/images/navbar/Logo name.png" alt="" />
                            </div>
                            <span className="absolute lg:hidden block right-8 top-8 text-white text-3xl cursor-pointer">
                                {navHeight === "h-48" ? (
                                    <i
                                        onClick={() => toggleNavbar()}
                                        className="fa fa-close"
                                        aria-hidden="true"
                                    ></i>
                                ) : (
                                    <i
                                        onClick={() => toggleNavbar()}
                                        className="fa fa-bars"
                                        aria-hidden="true"
                                    ></i>
                                )}
                            </span>
                            <ul
                                className={`navbar_list w-full overflow-hidden lg:h-12 ${navHeight} lg:mt-0 mt-14 lg:flex  flex lg:flex-row  gap-4 flex-col items-end lg:items-center lg:justify-between`}
                            >
                                <li onClick={() => handleClickHome()}>Home</li>
                                <li onClick={() => handleClickAbout()}>About me</li>
                                <li className="lg:block hidden" onClick={() => handleClickHome()}>
                                    {" "}
                                    <img src="/images/navbar/Logo name.png" alt="" />
                                </li>
                                <li onClick={() => handleclickWork()}>Work</li>
                                <li onClick={() => handleClickContact()}>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="heroSection   ">
                        <div className="heroSectionWrapper relative">
                            <div className="ellipseHero relative">
                                <img
                                    className="firstPng lg:h-60 md:h-40 h-32 "
                                    src="/images/hero/first.png"
                                    alt=""
                                />
                                {/* <img className='absolute  top-60 ' src="/images/hero/Ellipse 328.png" alt="" /> */}
                                <img
                                    className="absolute top-60 ellipse-2"
                                    src="/images/hero/Ellipse 329.png"
                                    alt=""
                                />
                                <img
                                    className="absolute  top-80 ellipse-3"
                                    src="/images/hero/Ellipse 328.png"
                                    alt=""
                                />
                            </div>
                            <div className="  flex items-center flex-col gap-14 justify-start md:pl-48 md:pt-28 ">
                                <div className="creativeWrapper lg:text-6xl md:text-4xl text-xl creative flex flex-col z-30">
                                    <span>Creative UI & Full Stack</span>
                                    <span>developer Akhtar Ali khan</span>
                                    <span>Based in Pakistan</span>
                                </div>
                                <div className="hero_section_button z-20 flex items-center gap-8">
                                    <a
                                        href="https://www.fiverr.com/ptiinsafstudent/create-custom-web-apps-react-nextjs-nodejs-typescript"
                                        target="_blank"
                                    >
                                        <button className="hire_me md:pl-16 pl-5 pr-5 p-2 md:p-3 md:pr-16">
                                            Hire me
                                        </button>
                                    </a>
                                    <button
                                        onClick={() => downloadCV()}
                                        className="download_cv md:pl-10 pl-5 pr-5 p-2 md:p-3 md:pr-10"
                                    >
                                        Download CV
                                    </button>
                                </div>
                                <div className="solarHero absolute top-14 right-0">
                                    <img src="/images/hero/Group 1190.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar  overflow-hidden  ">
                        <div
                            style={{ width: openSideBar }}
                            className={`sidebar_wrapper    z-50  fixed top-24`}
                        >
                            <ul className="flex   cursor-pointer flex-col items-center  h-full justify-around pt-36 pb-10">
                                <li
                                    onClick={() => {
                                        console.log("hallo ");
                                        toggleSidebar();
                                    }}
                                    className="h-12  justify-center w-12 flex items-center rounded-full absolute -top-8 md:top-0 -right-12 bg-white"
                                >
                                    <img
                                        className="h-8 "
                                        src="/images/sidebar/sidebar.png"
                                        alt=""
                                    />
                                </li>
                                <li
                                    onClick={() => {
                                        handleClickHome()
                                    }}
                                    className="cursor-pointer"
                                >
                                    <img
                                        className=" cursor-pointer"
                                        src="/images/sidebar/home.png"
                                        alt=""
                                    />
                                </li>
                                <li onClick={() => handleClickAbout()} className=" cursor-pointer">
                                    <img src="/images/sidebar/person_outline.png" alt="" />
                                </li>
                                <li onClick={() => handleclickWork()} className=" cursor-pointer">
                                    <img src="/images/sidebar/work.png" alt="" />
                                </li>
                                <li onClick={() => handleClickContact()} className=" cursor-pointer">
                                    <img src="/images/sidebar/Phone_fill.png" alt="" />
                                </li>
                                <li className=" cursor-pointer">
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
                        <div className="absolute md:block hidden left-0 top-32">
                            <img
                                className="h-80 "
                                src="/images/about_me/about_me.png"
                                alt=""
                            />
                        </div>
                        <div className="aboutMeCircleWords flex pl-8 flex-col gap-2  md:pl-80 md:pr-2">
                            <span className="aboutMeSpan md:text-xl text-lg">About me</span>
                            <div className="flex flex-col my_name_is md:text-lg text-sm">
                                <span>My name is Akhtar ali khan.</span>
                                <span>{"I'm a web developer"}</span>
                                <span>{" based in Pakistan. I'm curently"}</span>
                                <span>{"working with Next.js. I'm"}</span>
                                <span>passionate about creating digital</span>
                                <span>experiences and teaching design.</span>
                                <span>My goal is to help beginners to</span>
                                <span>
                                    {" "}
                                    grow their skills{" "}
                                    <span className="read_more cursor-pointer">...read more</span>
                                </span>
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
                    <span className="my_recent_work_span">My recent work</span>
                    <Slider />
                    <img
                        className="absolute small_big_circle"
                        src="/images/works/BG Small Circle.png"
                        alt=""
                    />
                    <img
                        className="absolute small_big_circle1"
                        src="/images/works/BG Small Circle.png"
                        alt=""
                    />
                </div>
            </div>
            <div ref={contact} className="contact_me">
                <div className="contact_me_wrapper md:flex-row flex-col flex pl-1 pr-1  gap-4 md:pl-28 md:pr-28 md:p-12">
                    <div className="leftContact flex-1 flex flex-col gap-14 md:p-0 p-8">
                        <div className="flex flex-col gap-6 ">
                            <span className="get_in_touch_span">Get in touch</span>
                            <div className="approachable flex flex-col">
                                <span>{"I'm very approachable and"}</span>
                                <span>{"would love to speak to you."}</span>
                                <span>{"Feel free to call, send me an"}</span>
                                <span>{"email . Follow me in social media or"}</span>
                                <span>{"simply complete the enquiry form."}</span>
                            </div>
                        </div>
                        <div className="contact_me_icons flex flex-col gap-4">
                            <div>
                                <span>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </span>
                                <span>+92 3059663565</span>
                            </div>
                            <span>akhtaralikhandeveloper@gmail.com</span>
                        </div>
                    </div>
                    <div className="rightContact relative flex-1 md:p-0 p-8">
                        <form className="flex flex-col gap-4 ">
                            <span className="send_me_a_message_span">Send me a message</span>
                            <input
                                className="input outline-none"
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="input outline-none"
                                placeholder="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="input outline-none"
                                placeholder="Subject"
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea
                                className="textarea outline-none"
                                placeholder="write message here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button disabled={loading ? true : false} onClick={(e) => handleEmailSubmit(e)} className="button_input z-40 cursor-pointer">
                                {loading ? <ColorRing
                                    visible={true}
                                    height="50"
                                    width="50"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                /> : "Send message"}
                            </button>
                        </form>
                        <div className="absolute top-60">
                            <img
                                className="group_1199 "
                                src="/images/contact/Group 1199.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="footer    mt-40">
                <div className="footerWrapper relative flex flex-col md:p-14 p-8 items-center md:gap-12 gap-6 justify-center ">
                    <img
                        className="absolute md:block hidden  left-32  top-0 h-32"
                        src="/images/footer/6.png"
                        alt=""
                    />
                    <ul className="flex  md:pl-32 md:pr-32 pl-0 pr-0 md:flex-nowrap flex-wrap  items-center justify-between md:gap-24 gap-4">
                        <li onClick={() => handleClickHome()} className="flex items-center gap-2 md:text-xl text-sm">
                            <img src="/images/footer/home.png" alt="" /> Home
                        </li>
                        <li onClick={() => handleClickAbout()} className="flex items-center gap-2 md:text-xl text-sm">
                            <img src="/images/footer/person_outline.png" alt="" /> About me
                        </li>
                        <li onClick={() => handleclickWork()} className="flex items-center gap-2 md:text-xl text-sm">
                            <img src="/images/footer/work.png" alt="" /> work
                        </li>
                        <li onClick={() => handleClickContact()} className="flex items-center gap-2 md:text-xl text-sm">
                            <img src="/images/footer/Phone_fill.png" alt="" /> Contact
                        </li>
                    </ul>
                    <ul className="flex  md:pl-32 md:pr-32  items-center justify-center md:gap-4 gap-4">
                        <li>
                            <a
                                href="https://www.instagram.com/react_node_developer/"
                                target="_blank"
                            >
                                <img
                                    className="ul_li_social"
                                    src="/images/footer/Instagram.png"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <img
                                className="ul_li_social"
                                src="/images/footer/Twitter.png"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                className="ul_li_social"
                                src="/images/footer/Linkedin.png"
                                alt=""
                            />
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/profile.php?id=61550939720046"
                                target="_blank"
                            >
                                <img
                                    className="ul_li_social"
                                    src="/images/footer/Facebook.png"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <div className="separator w-full pl-14 pr-14"></div>
                    <div className="footer_bottom flex items-end justify-end w-full">
                        <span className="copy_right">
                            Terms of Service - Privacy Policy
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;
