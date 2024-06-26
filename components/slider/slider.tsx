"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const slidesData = [
    {
        href: "https://amazona-joxp3phz8-hammadkhanwazir.vercel.app/",
        imgSrc: "/images/works/amazon_clone.jpg",
        title: "Amazon Clone",
    },
    {
        href: "https://travel-app-44yd.vercel.app/",
        imgSrc: "/images/works/travel.jpg",
        title: "Travel Agency",
    },
    {
        href: "https://consultant-sooty.vercel.app/",
        imgSrc: "/images/works/consultant.jpg",
        title: "Consultant Site",
    },
    {
        href: "https://hammadkhanwazir.github.io/web_scraping/src/",
        imgSrc: "/images/works/web_scraping.jpg",
        title: "Web scraping",
    },
    {
        href: "https://youtube-clone-k4r0id5np-hammadkhanwazir.vercel.app/",
        imgSrc: "/images/works/youtube_image.webp",
        title: "Youtube clone",
    },
];

export default function App() {
    return (
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
            {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div>
                        <a href={slide.href} target="_blank" className="flex flex-col gap-0">
                            <img src={slide.imgSrc} alt={slide.title} />
                            <span className="swiper_title text-center pt-8 w-full">{slide.title}</span>
                        </a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
