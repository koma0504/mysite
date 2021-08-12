import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const initialState = {
	date: [],
	loading: true,
	error: null,
};
const reducer = (state, action);
export const PostsTest = () => {
	const [state, setState] = useState();

	const getPosts = useCallback(async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts");
			if (!res.ok) {
				throw new Error("エラーが発生したため、データを取得できませんでした。");
			}
			const json = await res.json();
			setState((prevState) => {
				return {
					...prevState,
					date: json,
					loading: false,
				};
			});
		} catch (error) {
			setState((prevState) => {
				return {
					...prevState,
					error, //キーと値が同じなら省略できる
					loading: false,
				};
			});
		}
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	if (state.loading) {
		return <div>ローディング中</div>;
	}
	if (state.error) {
		return <div>{state.error.message}</div>;
	}
	if (state.date.length === 0) {
		return <div>データがありません</div>;
	}

	return (
		<ol>
			{state.date.map((post) => {
				return <li key={post.title}>{post.title}</li>;
			})}
		</ol>
	);
};
