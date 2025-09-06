import { useState } from "react";
import styles from "./Counter.module.scss";

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleReset() {
        setCount(0);
    }

    function handleDecrease() {
        setCount(count - 1);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>Ứng dụng đếm số</h1>
                <span
                    className={styles.counterNumber}
                    style={{
                        color: count > 0 ? "green" : count < 0 ? "red" : "gray",
                    }}
                >
                    {count}
                </span>
                <span
                    className={styles.alert}
                    style={{
                        color: count > 0 ? "green" : count < 0 ? "red" : "gray",
                    }}
                >
                    {count > 0 ? "Dương" : count < 0 ? "Âm" : "Bằng không"}
                </span>
                <div className={styles.utils}>
                    <button
                        className={`${styles.btn} ${styles.increase}`}
                        onClick={handleIncrease}
                    >
                        Tăng
                    </button>
                    <button
                        className={`${styles.btn} ${styles.reset}`}
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button
                        className={`${styles.btn} ${styles.decrease}`}
                        onClick={handleDecrease}
                    >
                        Giảm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
