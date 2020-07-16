import React from 'react';
import styles from './index.module.css';
import Link from '../link';

function Aside() {
    return (
        <aside className={styles.aside}>
            <ul>
                <Link href='#' title='Going to 1' type='aside'/>
                <Link href='#' title='Going to 2' type='aside'/>
                <Link href='#' title='Going to 3' type='aside'/>
                <Link href='#' title='Going to 4' type='aside'/>
                <Link href='#' title='Going to 5' type='aside'/>
                <Link href='#' title='Going to 6' type='aside'/>
                <Link href='#' title='Going to 7' type='aside'/>
            </ul>
        </aside>
    )
}

export default Aside