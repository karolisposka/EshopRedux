import React, { useRef, useCallback } from "react"
import * as S from "./Additives.styles"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Additives = ({ additives, className, handleAdd }) => {
    const sliderRef = useRef(null)
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slidePrev()
    }, [])

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slideNext()
    }, [])

    return (
        <S.Container className={className}>
            <Swiper ref={sliderRef} slidesPerView={2} spaceBetween={10}>
                {additives &&
                    additives.map((item, index) => (
                        <SwiperSlide key={index}>
                            <S.StyledAdditiveCard
                                title={item.title}
                                price={Number(item.price)}
                                url={item.image}
                                handleAdd={() => {
                                    handleAdd({ price: item.price, title: item.title })
                                }}
                            />
                        </SwiperSlide>
                    ))}
                <S.NavigationArrowsWrapper>
                    <S.NavigationArrowLeft onClick={handlePrev} />
                    <S.NavigationArrowRight onClick={handleNext} />
                </S.NavigationArrowsWrapper>
            </Swiper>
        </S.Container>
    )
}

Additives.propTypes = {
    additives: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    handleAdd: PropTypes.func.isRequired,
}

export default Additives
