import { NavLink } from "react-router";
import styles from "./Home.module.scss";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const pagesItem = [
    { to: "/counter", title: "Counter" },
    { to: "/todo", title: "Todo" },
    { to: "/profile", title: "Profile" },
    { to: "/products", title: "Products" },
    { to: "/comments", title: "Comments" },
    { to: "/weather", title: "Weather" },
    { to: "/buttons", title: "Buttons" },
];

function Home() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Chào mừng đến với F8 React Day 35</h1>
            <div className={styles.content}>
                <p className={styles.desc}>Các ứng dụng trong bài tập:</p>
                <ul className={styles.list}>
                    {pagesItem.map((page, index) => (
                        <li className={styles.iten} key={index}>
                            <NavLink to={page.to}>
                                <Button primary size="large" rounded>
                                    {page.title}{" "}
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </Button>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
