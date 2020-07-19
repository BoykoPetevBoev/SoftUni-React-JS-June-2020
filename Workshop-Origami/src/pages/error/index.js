import React from 'react';
import styles from './index.module.css';
import Wrapper from '../../components/page-wrapper';

function App() {
    return (
        <Wrapper>
            <div className={styles.container}>
                <h1 className={styles.title}>Error Page</h1>
            </div>
        </Wrapper>
    );
}

export default App;
