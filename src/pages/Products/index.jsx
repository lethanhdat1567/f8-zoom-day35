import { useEffect, useState } from "react";
import styles from "./Products.module.scss";

function Products() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    // Helpers
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const shorten = (str) =>
        str.length > 100 ? str.slice(0, 100) + "..." : str;

    function handleCloseModal() {
        setSelectedPost(null);
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0px";
    }

    function handleShowDetail(post) {
        setSelectedPost(post);
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "14px";
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Me, Myself & I Company</h1>
            {loading && <div className={styles.loading}>Đang tải...</div>}

            <div className={styles["products-wrapper"]}>
                {posts.map((post) => (
                    <div className={styles["product-card"]} key={post.id}>
                        <h3>{capitalize(post.title)}</h3>
                        <p>{shorten(post.body)}</p>
                        <button
                            className={styles["detail-btn"]}
                            onClick={() => handleShowDetail(post)}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>

            {selectedPost && (
                <div className={styles.modal}>
                    <div className={styles.content}>
                        <button
                            className={styles["close-btn"]}
                            onClick={handleCloseModal}
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>
                        <h3>{capitalize(selectedPost.title)}</h3>
                        <p>{selectedPost.body}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
