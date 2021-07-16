/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "./swiper.module.scss";

SwiperCore.use([EffectFade, Pagination]);

export function SwiperComp(slide) {
	return (
		<>
			<Swiper
				className={styles.my_swiper}
				spaceBetween={0}
				effect={"fade"}
				pagination={{
					clickable: true,
				}}
				loop={true}
			>
				<SwiperSlide>
					<img src="./img/qqq.jpg" alt="aaa" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./img/eee.jpg" alt="" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
