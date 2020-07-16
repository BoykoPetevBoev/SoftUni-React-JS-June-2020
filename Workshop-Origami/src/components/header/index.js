import React from 'react';
import styles from './index.module.css';
import Link from '../link';

function Header() {
    return (
        <header className={styles.navigation}>
            <ul>
                <Link href='#' title='Going to 1' type='header'/>
                <Link href='#' title='Going to 2' type='header'/>
                <Link href='#' title='Going to 3' type='header'/>
                <Link href='#' title='Going to 4' type='header'/>
                <Link href='#' title='Going to 5' type='header'/>
                <Link href='#' title='Going to 6' type='header'/>
                <Link href='#' title='Going to 7' type='header'/>
            </ul>
        </header>
    );
}

export default Header;