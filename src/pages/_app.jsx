import "../styles/reset.scss";
import "../styles/global.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	console.log(router);

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</>
	);
}

export default MyApp;
