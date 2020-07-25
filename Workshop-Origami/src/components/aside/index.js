import React, { Component } from 'react';
import styles from './index.module.css';
import Link from '../link';
import UserContext from '../../Context';

class Aside extends Component {

    static contextType = UserContext;

    render() {
        const { loggedIn, user } = this.context;
        
        return (
            <aside className={styles.aside}>
                <ul>
                    <Link href='/' title='Home' type='aside' />

                    {loggedIn ? <Link href='/post' title='Post' type='aside' /> : null}
                    {loggedIn ?  <Link href='/profile' title='Profile' type='aside' />: null}
                    {!loggedIn ? <Link href='/register' title='Register' type='aside' />: null}
                    {!loggedIn ? <Link href='/login' title='Login' type='aside' /> : null}

                 
                </ul>
            </aside>
        );
    }
}

export default Aside;
