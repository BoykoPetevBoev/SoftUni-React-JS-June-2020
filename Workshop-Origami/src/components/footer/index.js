import React from 'react';
import styles from './index.module.css';
import Link from '../link';
import image from '../../images/blue-origami-bird-flipped.png';


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href='#' title='Going to 1' type='footer' />
                <Link href='#' title='Going to 2' type='footer' />
                <Link href='#' title='Going to 3' type='footer' />
                <Link href='#' title='Going to 4' type='footer' />
                <Link href='#' title='Going to 5' type='footer' />
                <Link href='#' title='Going to 6' type='footer' />
                <Link href='#' title='Going to 7' type='footer' />
                <img src={image} />
            </ul>
            <p className={styles.title}>Software University © 2019</p>
        </footer>
    );
}

export default Footer;
