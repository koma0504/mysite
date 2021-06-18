// pages/index.js
import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useCallback } from "react"; //再生成を防ぐ
import { useEffect } from "react";
import { useState } from "react";

export default function Home({ blog }) {
	console.log("blog", blog);
	// useEffect(() => {
	// 	console.log("マウント時");
	// 	return () => {
	// 		console.log("アンマウント時");
	// 	};
	// }, [count]);

	const [count, setCount] = useState(1);
	const hendleClick = useCallback(() => {
		if (count < 10) {
			setCount((count) => count + 1);
		}
	}, []);

	const [array, setArray] = useState([1, 2, 3]);
	const handleAdd = useCallback(() => {
		setArray((prevArray) => {
			return prevArray;
		});
	}, []);
	return (
		<div className="body">
			<Header title="RATIO OBSERVER" layout="swiper" />
			<main className="main">
				<h1>{count}</h1>
				<botton onClick={hendleClick}>カウント</botton>
				<ul>
					{array.map((arrayele) => {
						return <li key={arrayele}>{arrayele}</li>;
					})}
				</ul>
				<botton onClick={handleAdd}>増えるよ</botton>

				<section className="about">
					<h2 className="title">ABOUT</h2>
					<p className="inner">
						TEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなですTEXTtext漢字で実験文字サンプルテキストひらがなです
					</p>
				</section>
				<section className="portfolio">
					<h2 className="title">PORTFOLIO</h2>

					<ul className="portfolio_list">
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
					</ul>
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
