import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function LinkComponent({title, href, type}) {
    return (
        <li className={styles[`${type}-list-item`]}>
            <Link className={styles[`${type}-link`]} to={href}>{title}</Link>
        </li>
    )
}

export default LinkComponent