import { Footer } from "../../src/components/Footer/Footer";
import { Header } from "../../src/components/Header/Header";
import styles from "./portfolio.module.scss";

// pages/blog/[id].js
export default function BlogId({ blog }) {
	return (
		<div className="body">
			<Header title={blog.title} />
			<main className={styles.main}>
				<h1 className={styles.title}>{blog.title}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: `${blog.body}`,
					}}
					className={styles.post}
				/>
			</main>
			<Footer />
		</div>
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
