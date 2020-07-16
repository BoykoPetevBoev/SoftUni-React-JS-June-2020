import React from 'react';
import styles from './index.module.css';

function Link({title, href, type}) {
    return (
        <li className={styles[`${type}-list-item`]}>
            <a className={styles[`${type}-link`]} href={href}>{title}</a>
        </li>
    )
}

export default Link