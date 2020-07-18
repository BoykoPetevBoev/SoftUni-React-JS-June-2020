import React from 'react';
import styles from './index.module.css';
import Link from '../link';
import image from '../../images/white-origami-bird.png';

function Header() {
    return (
        <header className={styles.navigation}>
            <ul>
                <img src={image} />
                <Link href='/' title='Home' type='header' />
                <Link href='/post' title='Post' type='header' />
                <Link href='/register' title='Register' type='header' />
                <Link href='/login' title='Login' type='header' />
                <Link href='/profile' title='Profile' type='header' />
            </ul>
        </header>
    );
}

export default Header;