import clsx from "clsx";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./Button.module.scss";

function Button({
    primary = false,
    rounded = false,
    bordered = false,
    disabled = false,
    loading = false,
    children,
    href,
    size = "medium",
    className,
    onClick,
    ...passProps
}) {
    const classNames = clsx(styles.wrapper, className, styles[size], {
        [styles.primary]: primary,
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.loading]: loading,
    });

    const Component = href ? "a" : "button";

    return (
        <Component
            {...passProps}
            href={href}
            className={clsx(classNames)}
            onClick={disabled || loading ? undefined : onClick}
        >
            <div className={styles.content}>{children}</div>
            {loading && (
                <span className={styles.spinner}>
                    <FontAwesomeIcon icon={faSpinner} spin />
                </span>
            )}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
