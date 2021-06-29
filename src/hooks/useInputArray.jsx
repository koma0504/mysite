import { useCallback, useState } from "react";

export const useInputArray = () => {
	const [text, setText] = useState("");
	const hendleText = useCallback((e) => {
		if (e.target.value.length >= 5) {
			alert("五文字以内にして下さ");
			return;
		}
		setText(e.target.value);
	}, []);

	const [array, setArray] = useState([]);
	const handleAdd = useCallback(() => {
		setArray((prevArray) => {
			const newArray = [...prevArray, 1];
			return newArray;
		});
	}, []);
	return { text, hendleText, array, handleAdd };
};
