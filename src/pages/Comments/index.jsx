import { useEffect, useState } from "react";
import styles from "./Comments.module.scss";

let randomId = 5000;

function Comments() {
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res) => res.json())
            .then((comments) => {
                setComments(comments);
                setLoading(false);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        if (commentInput.trim() && nameInput.trim() && emailInput.trim()) {
            const newComment = {
                id: ++randomId,
                name: nameInput,
                email: emailInput,
                body: commentInput,
            };

            setComments([newComment, ...comments]);
            setCommentInput("");
            setNameInput("");
            setEmailInput("");
        } else {
            alert("Vui lòng điền đầy đủ thông tin!");
        }
    }

    return (
        <div className={styles.wrapper}>
            <form
                className={styles["add-comment-wrapper"]}
                onSubmit={handleSubmit}
            >
                <div className={styles["form-group"]}>
                    <label
                        htmlFor="username"
                        className={styles["form-group__label"]}
                    >
                        Username
                    </label>
                    <input
                        id="username"
                        className={styles["form-group__input"]}
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        placeholder="Nhập tên"
                    />
                </div>
                <div className={styles["form-group"]}>
                    <label
                        htmlFor="email"
                        className={styles["form-group__label"]}
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className={styles["form-group__input"]}
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Nhập email"
                    />
                </div>
                <textarea
                    onChange={(e) => setCommentInput(e.target.value)}
                    value={commentInput}
                    rows={5}
                    className={styles["add-comment-input"]}
                    placeholder="Viết bình luận..."
                />
                <button className={styles["add-comment-btn"]}>Bình luận</button>
            </form>

            <div className={styles.comments}>
                {loading && <p className={styles.loading}>Loading...</p>}
                {comments.map((comment) => (
                    <div className={styles["comment-item"]} key={comment.id}>
                        <div className={styles["comment-item__info"]}>
                            <img
                                className={styles.avatar}
                                src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
                                alt={comment.name}
                            />
                            <div className={styles["comment-item__info-user"]}>
                                <div className={styles["username-wrapper"]}>
                                    <h3 className={styles["username-text"]}>
                                        {comment.name}
                                    </h3>
                                    <p className={styles.timer}>2 giờ trước</p>
                                </div>
                                <p className={styles["email-text"]}>
                                    {comment.email}
                                </p>
                            </div>
                        </div>
                        <div className={styles["comment-item__content"]}>
                            {comment.body}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;
