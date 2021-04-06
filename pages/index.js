// pages/index.js
import Link from 'next/link';
import Head from 'next/Head';

export default function Home({ blog }) {
	console.log(blog)
	return (
		<div>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>header</header>
			<ul>
				{blog.map(blog => (
					<li key={blog.id}>
						<img src={`${blog.thumbnail.url}`}></img>
						<Link href={`blog/${blog.id}`}>
							<a>{blog.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<footer>footer</footer>
		</div>
	);
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
	const key = {
		headers: { 'X-API-KEY': process.env.API_KEY },
	};
	const data = await fetch('https://ratio-observatory.microcms.io/api/v1/contents', key)
		.then(res => res.json())
		.catch(() => null);
	return {
		props: {
			blog: data.contents,
		},
	};
};
