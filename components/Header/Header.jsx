import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
export function Header({ title }) {
	return (
		<React.Fragment>
			<Head>
				<title>ratio-observer{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="ポートフォリオサイトです" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<header className="header">
				<h1 className="logo">RATIO OBSERVER</h1>
				<nav className="nav">
					<ul className="menu">
						<li>
							<Link href="/about">
								<a>ABOUT</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>CONTACT</a>
							</Link>
						</li>
					</ul>
				</nav>
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
				</Swiper>
			</header>
		</React.Fragment>
	);
}
