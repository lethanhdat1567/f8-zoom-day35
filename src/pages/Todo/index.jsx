import { useState } from "react";
import styles from "./Todo.module.scss";

let uniqId = 0;

function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: ++uniqId, text: inputValue, completed: false },
            ]);
            setInputValue("");
        }
    };

    function handleDestroyTodo(todoId) {
        const newTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(newTodos);
    }

    function handleChecked(todoId) {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    function handleCountCompleteTask() {
        let completeTasks = 0;
        todos.forEach((todo) => todo.completed && completeTasks++);
        return completeTasks;
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Todo App</h1>
            <form onSubmit={handleSubmit} className={styles["add-todo"]}>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập task mới..."
                    className={styles["todo-input"]}
                />
                <button type="submit" className={styles["add-btn"]}>
                    Thêm
                </button>
            </form>

            <ul className={styles.todos}>
                {todos.length === 0 && (
                    <p className={styles["empty-alert"]}>
                        Chưa có task nào. Hãy thêm task đầu tiên!
                    </p>
                )}
                {todos.map((todo) => (
                    <li className={styles["todo-item"]} key={todo.id}>
                        <input
                            type="checkbox"
                            className={styles["input-checkbox"]}
                            checked={todo.completed}
                            onChange={() => handleChecked(todo.id)}
                        />
                        <span
                            className={styles["todo-content"]}
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.text}
                        </span>
                        <button
                            className={styles["destroy-todo-btn"]}
                            onClick={() => handleDestroyTodo(todo.id)}
                        >
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles["todo-footer"]}>
                <p className={styles["todo-footer-text"]}>
                    Tổng: {todos.length} task(s)
                </p>
                <p className={styles["todo-footer-text"]}>
                    Hoàn thành: {handleCountCompleteTask()} task(s)
                </p>
                <p className={styles["todo-footer-text"]}>
                    Còn lại: {todos.length - handleCountCompleteTask()} task(s)
                </p>
            </div>
        </div>
    );
}

export default Todo;
