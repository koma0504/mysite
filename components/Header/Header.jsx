import Head from "next/head";
import { Nav } from "../Nav/Nav";
import { SwiperComp } from "../SwiperComp/SwiperComp";
export function Header(props) {
	switch (props.layout) {
		case "swiper": {
			return (
				<>
					<Head>
						<title>{props.title} | RATIO OBSERVER</title>
						<meta name="viewport" content="initial-scale=1.0, width=device-width" />
						<meta name="description" content="ポートフォリオサイトです" />
						<link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
							rel="stylesheet"
						></link>
					</Head>
					<header className="header">
						<Nav />
						<SwiperComp />
					</header>
				</>
			);
		}
		default: {
			console.log(props);
			return (
				<>
					<Head>
						<title>{props.title} | RATIO OBSERVER</title>
						<meta name="viewport" content="initial-scale=1.0, width=device-width" />
						<meta name="description" content="ポートフォリオサイトです" />
						<link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
							rel="stylesheet"
						></link>
					</Head>
					<header className="header">
						<Nav />
					</header>
				</>
			);
		}
	}
}
