"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
export default function App() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div >
                        <a
                            href="https://amazona-joxp3phz8-hammadkhanwazir.vercel.app/"
                            target="_blank"
                            className="flex flex-col gap-0"
                        >
                            <img src="/images/works/amazon_clone.jpg" />
                            <span className="swiper_title text-center pt-8 w-full">Amazon Clone</span>
                        </a>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div >
                        <a href="https://travel-app-44yd.vercel.app/" className="flex flex-col gap-0" target="_blank">
                            <img src="/images/works/travel.jpg" />
                            <span className="swiper_title text-center pt-8 w-full">Travel Agency</span>
                        </a>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a href="https://consultant-sooty.vercel.app/" className="flex flex-col gap-0" target="_blank">
                            <img src="/images/works/consultant.jpg" />
                            <span className="swiper_title text-center pt-8 w-full">Consultant Site</span>
                        </a>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <a className="flex flex-col gap-0" href="https://hammadkhanwazir.github.io/web_scraping/src/" target="_blank">

                            <img src="/images/works/web_scraping.jpg" />
                            <span className="swiper_title text-center pt-8 w-full">Web scraping</span>

                        </a>
                    </div>

                </SwiperSlide>
            </Swiper>
        </>
    );
}
