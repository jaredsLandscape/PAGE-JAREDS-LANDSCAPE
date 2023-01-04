import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import ImgSliderOne from "../img/img-slider-1.jpg"
import ImgSlider2 from "../img/img-slider-2.jpg"
import ImgSlider3 from "../img/img-slider-3.jpg"
import ImgSlider4 from "../img/img-slider-4.jpg"

export default function About({leng}){

    useEffect(()=> {
        const fade = document.querySelectorAll('.fade');

        const Scroll = ()=>{
            const scrollTop = document.documentElement.scrollTop;
            for (var i = 0; i < fade.length; i++){

                const altura = fade[i].offsetTop;

                if(altura - 400 < scrollTop){
                    fade[i].style.opacity = 1;
                    fade[i].classList.add('fade_up');
                }
            }
        }

        window.addEventListener('scroll', Scroll);
    },[])

    return(
        // QUIENES SOMOS
        <section id="quienes_somos">
            <div className="quienes_somos_info">
                <h2 className="fade">{leng==='es'?"¿Quiénes somos?": "About us"}</h2>
                {leng==='es'?(
                    <p className="fade">Jared’s Landscape es un proyecto de emprendimiento familiar, que busca brindar 
                    un servicio de calidad y satisfacción para el cliente.<br/>
                    Nacimos en el 2012 en la ciudad de Hillsboro Oregon y con el paso de los años hemos logrado crecer, en 2016 nos expandimos y asociamos para mejorar nuestros estándares de servicio, contamos con el conocimiento y la mejor disposición para ayudarte, reinventándonos en todo momento para brindarte un mejor servicio.</p>
                ): <p>Jared’s Landscape is a family business project that seeks to provide 
                quality service and customer satisfaction.<br/>
                We were born in 2012 in the city of Hillsboro Oregon and over the years we have managed to grow, in 2016 we expanded and partnered to improve our service standards, we have the knowledge and the best disposition to help you, reinventing ourselves at all times to provide you with a better service.</p>}
            </div>
            {/* SLIDER */}
            <div className="quienes_somos_slide">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                autoplay={{delay: 2500, disableOnInteraction: false}}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper swiper-wrapper"
            >
                <SwiperSlide className="swiper-slide">
                    <img src={ImgSliderOne} alt="works made by JARED´S LANDSCAPE"/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={ImgSlider2} alt="works made by JARED´S LANDSCAPE"/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={ImgSlider3} alt="works made by JARED´S LANDSCAPE"/>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={ImgSlider4} alt="works made by JARED´S LANDSCAPE"/>
                </SwiperSlide>
            </Swiper>
                <div className="slogan">
                    <p>{leng === 'es'?"Transformamos cualquier espacio en un lugar acogedor, atractivo y confortable, comprometiendonos contigo y el cuidado de tu propiedad.":"We transform any space into a welcoming, attractive and comfortable place, committing ourselves to you and the care of your property."}</p>
                </div>
            </div>
        </section>
    )
}