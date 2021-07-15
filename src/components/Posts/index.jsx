import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

export const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const getPosts = useCallback(async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts");
			if (!res.ok) {
				throw new Error("エラーが発生したため、データを取得できませんでした。");
			}
			const json = await res.json();
			setPosts(json);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	if (loading) {
		return <div>ローディング中</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (posts.length === 0) {
		return <div>データがありません</div>;
	}

	return (
		<ol>
			{posts.map((post) => {
				return <li key={post.title}>{post.title}</li>;
			})}
		</ol>
	);
};
