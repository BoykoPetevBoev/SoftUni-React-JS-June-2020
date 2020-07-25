import React, { Component } from 'react';
import styles from './index.module.css';
import Link from '../link';
import image from '../../images/white-origami-bird.png';
import UserContext from '../../Context';


class Header extends Component {

    static contextType = UserContext;

    render() {
        const { loggedIn, user } = this.context;

        return (
            <header className={styles.navigation}>
                <ul>
                    <img src={image} />
                    <Link href='/' title='Home' type='header' />
                   
                    {loggedIn ? <Link href='/post' title='Post' type='header' /> : null}
                    {loggedIn ?  <Link href='/profile' title='Profile' type='header' />: null}
                    {!loggedIn ? <Link href='/register' title='Register' type='header' />: null}
                    {!loggedIn ? <Link href='/login' title='Login' type='header' /> : null}

                </ul>
            </header>
        );
    }
}

export default Header;
