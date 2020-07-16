import React from 'react';
import styles from './index.module.css';
import Link from '../link';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href='#' title='Going to 1' type='footer'/>
                <Link href='#' title='Going to 2' type='footer'/>
                <Link href='#' title='Going to 3' type='footer'/>
                <Link href='#' title='Going to 4' type='footer'/>
                <Link href='#' title='Going to 5' type='footer'/>
                <Link href='#' title='Going to 6' type='footer'/>
                <Link href='#' title='Going to 7' type='footer'/>
            </ul>
            <p className={styles.title}>Software University © 2019</p>
        </footer>
    );
}

export default Footer;
