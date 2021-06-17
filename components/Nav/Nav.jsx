import Link from "next/link";

export function Nav() {
	return (
		<nav className="nav">
			<h1 className="logo">
				<Link href="/">
					<a>RATIO OBSERVER</a>
				</Link>
			</h1>
			<ul className="menu">
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
			</ul>
		</nav>
	);
}
