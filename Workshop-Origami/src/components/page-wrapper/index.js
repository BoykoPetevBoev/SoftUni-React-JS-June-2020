import React from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Aside from '../../components/aside';
import Footer from '../../components/footer';

function Wrapper(props) {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Wrapper;
