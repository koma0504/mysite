// pages/index.js
import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Home(props, { blog }) {
	const {
		text,
		hendleText,
		array,
		handleAdd,
		count,
		hendleClick,
		isShow,
		handleDisplay,
	} = props;
	console.log("props", props);

	const list = {
		visible: {
			opacity: 1,
			transition: { when: "beforeChildren", staggerChildren: 0.3 },
		},
		hidden: { opacity: 0 },
	};
	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};

	return (
		<div className="body">
			<Header title="RATIO OBSERVER" layout="swiper" />
			<main className="main">
				<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
				{isShow ? <h1>{count}</h1> : null}

				<botton onClick={hendleClick}>カウント</botton>
				<botton onClick={handleAdd}>増えるよ</botton>
				<ul>
					{array.map((arrayele) => {
						return <li key={arrayele}>{arrayele}</li>;
					})}
				</ul>
				<input type="text" value={text} onChange={hendleText} />

				<section className="about">
					<h2 className="title">ABOUT</h2>
					<p className="inner">
						TEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなです
					</p>
				</section>
				<section className="portfolio">
					<h2 className="title">PORTFOLIO</h2>

					{/* <ul className="portfolio_list">
						{blog.map((blog) => (
							<li key={blog.title} className="">
								<Link href={`/portfolio/${blog.title}`}>
									<a>
										<p className="">{blog.title}</p>
										{<Image src={blog.thumbnail.url} width={300} height={200} />}
									</a>
								</Link>
							</li>
						))}
					</ul> */}
				</section>
			</main>
			<Footer />
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
