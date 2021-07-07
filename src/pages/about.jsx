import { Header } from "../components/Header/Header";
import { motion } from "framer-motion";

export default function about() {
	return (
		<div className="body">
			<Header title="about" />
			<main className="main">
				<h2>about</h2>
			</main>
			<motion.div
				className="overlay unmount"
				exit={{ height: "100vh", zIndex: 9999, opacity: 1, visibility: "visible" }}
			></motion.div>
			<motion.div
				className="overlay mount"
				animate={{
					top: "-100vh",
				}}
			></motion.div>
		</div>
	);
}
