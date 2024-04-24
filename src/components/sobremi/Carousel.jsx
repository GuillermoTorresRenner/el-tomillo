'use client'

import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

register()

export const Carousel = ({ images }) => {
    const swiperElRef = useRef(null)

    // useEffect(() => {
    //     // listen for Swiper events using addEventListener
    //     swiperElRef.current.addEventListener('swiperprogress', (e) => {
    //         const [swiper, progress] = e.detail
    //         console.log(progress)
    //     })

    //     swiperElRef.current.addEventListener('swiperslidechange', (e) => {
    //         console.log('slide changed')
    //     })
    // }, [])

    return (
        <div className="triple-slider">
            {/* <swiper-container
                ref={swiperElRef}
                slides-per-view="3"
                spaceBetween="5"
                navigation="true"
                pagination="true"
            >
                {images.map((image, key) => {
                    return (
                        <swiper-slide key={key}>
                            <Image
                                className="bg-image"
                                src={image}
                                alt="Slide image"
                                width={900}
                                height={600}
                            />
                        </swiper-slide>
                    )
                })}
            </swiper-container> */}
            <div className="triple-slider">
                <div className="swiper triple-slider-prev swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                    <div
                        className="swiper-wrapper"
                        style={{transitionDuration: "0ms", transform: "translate3d(0px, 0px, 0px)", transitionDelay: "0ms"}}
                    >
                        <div
                            className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                            data-swiper-slide-index="3"
                            style={{width: "640px"}}
                        >                            
                            <Image
                                className="logo-image logo-image-3"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(0%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide swiper-slide-next"
                            data-swiper-slide-index="4"
                            style={{width: "640px"}}
                        >                            
                            <Image
                                className="logo-image logo-image-4"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="0"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-5"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="1"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-1"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="2"
                            style={{width: "640px"}}
                        >                           
                            <Image
                                className="logo-image logo-image-2"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className="swiper triple-slider-main swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                    <div
                        className="swiper-wrapper"
                        style={{cursor: "grab", transitionDuration: "0ms", transform: "translate3d(0px, 0px, 0px)", transitionDelay: "0ms"}}
                    >
                        <div
                            className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                            data-swiper-slide-index="3"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-4"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(0%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide swiper-slide-next"
                            data-swiper-slide-index="4"
                            style={{width: "640px"}}
                        >
                           
                            <Image
                                className="logo-image logo-image-5"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""                                
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="0"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-1"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="1"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-2"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="2"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-3"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className="swiper triple-slider-next swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                    <div
                        className="swiper-wrapper"
                        style={{transitionDuration: "0ms", transform: "translate3d(0px, 0px, 0px)", transitionDelay: "0ms"}}
                    >
                        <div
                            className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                            data-swiper-slide-index="3"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-5"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(0%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide swiper-slide-next"
                            data-swiper-slide-index="4"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-1"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>

                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="0"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-2"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="1"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-3"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                        <div
                            className="swiper-slide"
                            data-swiper-slide-index="2"
                            style={{width: "640px"}}
                        >
                            
                            <Image
                                className="logo-image logo-image-4"
                                data-swiper-parallax-x="50%"
                                src="/images/inicio_gallery_img1.png"
                                alt=""
                                style={{transform: "translate3d(-50%, 0px, 0px)", transitionDuration: "0ms"}}
                                width={300} height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
