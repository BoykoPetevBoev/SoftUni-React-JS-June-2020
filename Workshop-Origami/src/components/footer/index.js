import React, { Component } from 'react';
import styles from './index.module.css';
import Link from '../link';
import image from '../../images/blue-origami-bird-flipped.png';
import UserContext from '../../Context';


class Footer extends Component {

    static contextType = UserContext;

    render() {
        const { loggedIn, user } = this.context;
        return (
            <footer className={styles.footer}>
                <ul>
                    <Link href='/' title='Home' type='footer' />

                    {loggedIn ? <Link href='/post' title='Post' type='footer' /> : null}
                    {loggedIn ?  <Link href='/profile' title='Profile' type='footer' />: null}
                    {!loggedIn ? <Link href='/register' title='Register' type='footer' />: null}
                    {!loggedIn ? <Link href='/login' title='Login' type='footer' /> : null}

                    <img src={image} />
                </ul>
                <p className={styles.title}>Software University © 2019</p>
            </footer>
        );
    }
}

export default Footer;
