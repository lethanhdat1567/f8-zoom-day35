import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const navItems = [
    { to: "/", title: "Home" },
    { to: "/counter", title: "Counter" },
    { to: "/todo", title: "Todo" },
    { to: "/profile", title: "Profile" },
    { to: "/products", title: "Products" },
    { to: "/comments", title: "Comments" },
    { to: "/weather", title: "Weather" },
    { to: "/buttons", title: "Buttons" },
];

function Navigation() {
    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li key={item.to} className={styles.navItem}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `${styles.item} ${
                                        isActive ? styles.active : ""
                                    }`
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
