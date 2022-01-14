import styles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = ({ children }) => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li className={styles.li}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.li}>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
