import React from 'react';
import styles from './index.module.css';

function Input({label, id, value, onChange}) {
    return (
        <div className={styles['form-control']}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input className={styles.input} value={value} onChange={onChange}></input>
        </div>
    )
}

export default Input