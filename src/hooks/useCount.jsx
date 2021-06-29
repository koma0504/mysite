import { useCallback, useState } from "react";

export const useCount = () => {
	const [count, setCount] = useState(1);
	const hendleClick = useCallback(() => {
		if (count < 10) {
			setCount((count) => count + 1);
		}
	}, []);
	const [isShow, setIsShow] = useState(true);
	const handleDisplay = useCallback(() => {
		setIsShow((isShow) => !isShow);
	}, []);

	return { count, hendleClick, isShow, handleDisplay };
};
