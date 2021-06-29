import "../styles/reset.scss";
import "../styles/global.scss";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
	return (
		<div>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
