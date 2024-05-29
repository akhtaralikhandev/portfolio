"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./testimonial.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const slidesData = [
    {
        href: "https://www.fiverr.com/akhtaraliwazirr?up_rollout=true",
        imgSrc: "/images/testimonial/1.png",
        title: "Amazon Clone",
    },
    {
        href: "https://www.fiverr.com/akhtaraliwazirr?up_rollout=true",
        imgSrc: "/images/testimonial/2.png",
        title: "Travel Agency",
    },
    {
        href: "https://www.fiverr.com/akhtaraliwazirr?up_rollout=true",
        imgSrc: "/images/testimonial/3.png",
        title: "Consultant Site",
    },
    {
        href: "https://www.fiverr.com/akhtaraliwazirr?up_rollout=true",
        imgSrc: "/images/testimonial/4.png",
        title: "Web scraping",
    },
    {
        href: "https://www.fiverr.com/akhtaraliwazirr?up_rollout=true",
        imgSrc: "/images/testimonial/5.png",
        title: "Youtube clone",
    },
];

export default function Testimonials() {
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
                        </a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
