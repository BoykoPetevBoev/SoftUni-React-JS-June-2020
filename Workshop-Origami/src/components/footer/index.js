import React from 'react';
import styles from './index.module.css';
import Link from '../link';
import image from '../../images/blue-origami-bird-flipped.png';


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href='/' title='Home' type='footer' />
                <Link href='/post' title='Post' type='footer' />
                <Link href='/register' title='Register' type='footer' />
                <Link href='/login' title='Login' type='footer' />
                <Link href='/profile' title='Profile' type='footer' />
                <img src={image} />
            </ul>
            <p className={styles.title}>Software University © 2019</p>
        </footer>
    );
}

export default Footer;
