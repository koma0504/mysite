// pages/index.js
import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { motion, useViewportScroll, useTransform } from "framer-motion";
// import { PostsTest } from "../components/PostsTest";
import { useInView } from "react-intersection-observer";

export default function Home({ blog }) {
	console.log(blog);
	const all = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
		transition: { when: "beforeChildren", staggerChildren: 0.3 },
	};
	const [ref, inView] = useInView({
		rootMargin: "-50% 0px",
		triggerOnce: true, // 最初の一度だけ実行
	});
	const [ref2, inView2] = useInView({
		rootMargin: "-50% 0px",
		triggerOnce: true, // 最初の一度だけ実行
	});
	return (
		<motion.div
			className="body"
			variants={all}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			{/* <PostsTest /> */}
			<Header title="RATIO OBSERVER" layout="swiper" />

			<main className="main">
				<section ref={ref} className={`${"about"} ${inView ? "show" : ""}`}>
					<div className="inner">
						<h2 className="title">ABOUT</h2>
						<p className="text_inner">
							TEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなです
						</p>
					</div>
				</section>
				<section className="test">aas</section>
				<section ref={ref2} className={`${"portfolio"} ${inView2 ? "show" : ""}`}>
					{/* <section className="portfolio"> */}
					<h2 className="title">PORTFOLIO</h2>
					<ul className="portfolio_list">
						{blog.map((blog) => (
							<li key={blog.title} className="">
								<Link href={`/portfolio/${blog.title}`}>
									<a>
										<motion.p whileHover={{ opacity: 1 }} className="">
											{blog.title}
										</motion.p>
										{
											<Image
												src={blog.thumbnail.url}
												width={300}
												height={200}
												alt={blog.title}
											/>
										}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</main>
			<Footer />
		</motion.div>
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
