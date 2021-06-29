import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export function SwiperComp(slide) {
	return (
		<>
			<Swiper
				loop={true}
				centeredSlides={true}
				// autoplay={{
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// }}
				pagination={{
					clickable: true,
				}}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="./img/qqq.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./img/eee.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
