import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Carousel = ({ className }) => {
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
            <SwiperSlide>{children}</SwiperSlide>
        </Swiper>
    )
}

export default Carousel
