import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Tab from "../tab/Tab"

const Carousel = ({ items, className }) => {
    return (
        <Swiper
            className={className}
            breakpoints={{
                0: {
                    width: 768,
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    width: 768,
                    slidesPerView: 4,
                },
            }}
        >
            {items &&
                items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Tab onClick={item.handleClick()}>{item.text}</Tab>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default Carousel
