// pages/index.js
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss'

export default function Home({ blog }) {
	console.log({ blog })
	return (
		<div>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="ポートフォリオサイトです" />
			</Head>
			<header>
				<a id="circle" className={styles.circle} href="javascript:void(0)"> MENU MENU MENU MENU MENU</a>
			</header>
			<ul className={styles.inner_l}>
				{blog.map(blog => (
					<li key={blog.id}>
						{/* <img src={`${blog.thumbnail.url}`} /> */}
						{/* <Image src="https://images.microcms-assets.io/assets/710995afcd1b456ea275f373af369f39/49006d2e547f4377a67b5cca9fe02370/sp_icon_information.png " width={100}
							height={100} /> */}
						{/* <Image
							src={blog.thumbnail.url}
							width={100}
							height={100} /> */}

						<Link href={`blog/${blog.id}`}>
							<a>{blog.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<Image src="/dog.jpg" width={100} height={100} />
			<Image src="/vercel.svg" width={100} height={100} />
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
