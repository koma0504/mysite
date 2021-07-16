// pages/index.js
import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { Postssssss } from "../components/Postssssss";

export default function Home({ blog }) {
	return (
		<div className="body">
			<Postssssss />

			<Header title="RATIO OBSERVER" layout="swiper" />
			<main className="main">
				<section className="about">
					<div className="inner">
						<h2 className="title">ABOUT</h2>
						<p className="text_inner">
							TEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなです
						</p>
					</div>
				</section>

				<section className="portfolio">
					<h2 className="title">PORTFOLIO</h2>
					<ul className="portfolio_list">
						{blog.map((blog) => (
							<li key={blog.title} className="">
								<Link href={`/portfolio/${blog.title}`}>
									<a>
										<motion.p whileHover={{ opacity: 1 }} className="">
											{blog.title}
										</motion.p>
										{/* eslint-disable-next-line jsx-a11y/alt-text */}
										{<Image src={blog.thumbnail.url} width={300} height={200} />}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</main>
			<Footer />
			<motion.div
				className="overlay unmount"
				exit={{ height: "100vh", zIndex: 9999, opacity: 1, visibility: "visible" }}
			></motion.div>
			<motion.div
				className="overlay mount"
				animate={{
					top: "-100vh",
				}}
			></motion.div>
		</div>
	);
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
	const key = {
		headers: { "X-API-KEY": process.env.API_KEY },
	};
	const data = await fetch(
		"https://ratio-observatory.microcms.io/api/v1/contents",
		key
	)
		.then((res) => res.json())
		.catch(() => null);
	return {
		props: {
			blog: data.contents,
		},
	};
};
