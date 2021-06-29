import { useEffect } from "react";

export const useConsole = () => {
	useEffect(() => {
		console.log("マウント時");
		return () => {
			console.log("アンマウント時");
		};
	}, []);
};
