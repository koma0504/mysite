import "../styles/reset.scss";
import "../styles/global.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useCount } from "../hooks/useCount";
import { useInputArray } from "../hooks/useInputArray";
import { useConsole } from "../hooks/useConsole";

function MyApp({ Component, pageProps }) {
	const counter = useCount();
	const inputArray = useInputArray();
	useConsole();

	return (
		<div>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} {...counter} {...inputArray} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
