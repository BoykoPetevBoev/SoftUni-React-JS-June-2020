import React from 'react';
import styles from './index.module.css';
import Link from '../link';

function Aside() {
    return (
        <aside className={styles.aside}>
            <ul>
                <Link href='/' title='Home' type='aside'/>
                <Link href='/post' title='Post' type='aside'/>
                <Link href='/register' title='Register' type='aside'/>
                <Link href='/login' title='Login' type='aside'/>
                <Link href='/profile' title='Profile' type='aside'/>
            </ul>
        </aside>
    )
}

export default Aside