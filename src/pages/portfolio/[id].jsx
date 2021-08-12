import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./portfolio.module.scss";
import { motion } from "framer-motion";

// pages/blog/[id].js
export default function BlogId(props) {
	return (
		<motion.div
			className="body"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header title={props.blog.title} />
			<main className="main">
				<section className={styles.list}>
					<h1 className="title">{props.blog.title}</h1>
					<div
						dangerouslySetInnerHTML={{
							__html: `${props.blog.body}`,
						}}
						className={styles.post}
					/>
				</section>
			</main>
			<Footer />
		</motion.div>
	);
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
	const key = {
		headers: { "X-API-KEY": process.env.API_KEY },
	};
	const data = await fetch(
		"https://ratio-observatory.microcms.io/api/v1/contents",
		key
	)
		.then((res) => res.json())
		.catch(() => null);
	const paths = data.contents.map((content) => `/portfolio/${content.id}`);
	return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const key = {
		headers: { "X-API-KEY": process.env.API_KEY },
	};
	const data = await fetch(
		"https://ratio-observatory.microcms.io/api/v1/contents/" + id,
		key
	)
		.then((res) => res.json())
		.catch(() => null);
	return {
		props: {
			blog: data,
		},
	};
};
