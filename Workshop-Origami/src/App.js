import React from 'react';
import styles from './App.module.css';
import Header from './components/header';
import Aside from './components/aside';
import Origami from './components/origami';
import Footer from './components/footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origami />
      </div>
      <Footer />
    </div>
  );
}

export default App;
