import React from "react"
import * as S from "./Additives.styles"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Additives = ({ additives, className }) => {
    return (
        <S.Container className={className}>
            <Swiper
                breakpoints={{
                    0: {
                        width: 768,
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        width: 768,
                        spaceBetween: 10,
                        slidesPerView: 4,
                    },
                }}
            >
                {additives &&
                    additives.map((item, index) => (
                        <SwiperSlide key={index}>
                            <S.StyledAdditiveCard
                                title={item.title}
                                price={item.price}
                                url={item.image}
                                handleClick={() => {
                                    alert("hi")
                                }}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </S.Container>
    )
}

export default Additives
