import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Tab from "../tab/Tab"

const Carousel = ({ items }) => {
    return (
        <Swiper spaceBetween={50} slidesPerView={3}>
            {items &&
                items.map((item) => (
                    <SwiperSlide>
                        <Tab>{item}</Tab>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default Carousel
