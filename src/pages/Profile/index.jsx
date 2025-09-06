import { useState, useEffect } from "react";
import styles from "./Profile.module.scss";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((error) => console.log(error));
    }, []);

    if (!user) return <div className={styles.loading}>Đang tải...</div>;

    return (
        <div className={styles["profile-wrapper"]}>
            <div className={styles.thumbnail}>
                <img
                    className={styles.image}
                    src="https://images.unsplash.com/photo-1566070294271-0cb77eb47f6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdlbnRsZW1lbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="putin"
                />
            </div>
            <div className={styles["profile-card"]}>
                <h2 className={styles["user-name"]}>{user.name}</h2>
                <p>
                    <strong>Username:</strong> {user.username}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                    <strong>Website:</strong>{" "}
                    <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {user.website}
                    </a>
                </p>
                <p>
                    <strong>Address:</strong> {user.address.street},{" "}
                    {user.address.city}
                </p>
            </div>
        </div>
    );
}

export default Profile;
