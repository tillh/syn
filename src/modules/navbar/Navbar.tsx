import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

export function Navbar() {
    const router = useRouter();

    return (
        <nav className="flex sticky top-0 bg-white z-50">
            <Link href={'/contracts'} passHref={true}>
                <a className={`${styles.navItem} ${isActive(router.pathname, '/contracts')}`}>
                    Contracts
                </a>
            </Link>

            <Link href={'/usage'} passHref={true}>
                <a className={`${styles.navItem} ${isActive(router.pathname, '/usage')}`}>Usage</a>
            </Link>
        </nav>
    );
}

function isActive(currentPathname: string, path: string) {
    return currentPathname === path ? styles.navItemActive : '';
}
