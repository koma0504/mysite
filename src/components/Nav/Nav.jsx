import Link from "next/link";
import styles from "./nav.module.scss";
import { motion } from "framer-motion";

export function Nav() {
	return (
		<nav className={styles.nav}>
			<motion.h1
				className={styles.logo}
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 1,
				}}
			>
				<Link href="/">
					<a>RATIO OBSERVER</a>
				</Link>
			</motion.h1>
			<motion.ul
				className={styles.menu}
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					duration: 1,
				}}
			>
				<li>
					<Link href="/about">
						<a>ABOUT</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>CONTACT</a>
					</Link>
				</li>
			</motion.ul>
		</nav>
	);
}
