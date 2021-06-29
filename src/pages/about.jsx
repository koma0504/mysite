import { Header } from "../components/Header/Header";

export default function about(props) {
	console.log(props);
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
	return (
		<div className="body">
			<Header title="about" />
			<main className="main">
				<p>about</p>
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
			</main>
		</div>
	);
}
