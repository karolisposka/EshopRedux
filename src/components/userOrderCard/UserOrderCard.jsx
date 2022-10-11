import React, { useRef, useCallback } from "react"
import * as S from "./UserOrderCard.styles"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

const UserOrderCard = ({ created_at, completed_at, products, status, order_id }) => {
    const sliderRef = useRef(null)

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slidePrev()
    }, [])

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slideNext()
    }, [])

    const convertUnixTimestamp = (unix) => {
        const date = new Date(unix)
        return {
            date: date.toLocaleDateString("en-us"),
            time: date.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
        }
    }

    return (
        <S.Container>
            <S.ContentSection>
                <S.Text>Order ID: {order_id}</S.Text>
                <S.Text>
                    Order recieved: {created_at && <S.Recieved>{convertUnixTimestamp(created_at).time}</S.Recieved>}
                </S.Text>
                <S.Text>
                    <S.Status status={status}>{status === 0 ? "in Progress" : "completed"}</S.Status>
                    {completed_at && <S.Completed> {convertUnixTimestamp(completed_at).time}</S.Completed>}
                </S.Text>
            </S.ContentSection>
            <Swiper ref={sliderRef}>
                {products &&
                    products.map((photo) => (
                        <SwiperSlide>
                            <S.Image image={photo.imageurl} />
                            <S.ContentSection>
                                <S.Title>{photo.title}</S.Title>
                                <S.Description>{photo.description}</S.Description>
                            </S.ContentSection>
                        </SwiperSlide>
                    ))}
            </Swiper>
            {products.length > 1 && (
                <S.NavigationArrowsWrapper>
                    <S.NavigationArrowLeft onClick={handlePrev} />
                    <S.NavigationArrowRight onClick={handleNext} />
                </S.NavigationArrowsWrapper>
            )}
        </S.Container>
    )
}

export default UserOrderCard
