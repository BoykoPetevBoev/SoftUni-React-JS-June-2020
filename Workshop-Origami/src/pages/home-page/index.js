
import React, { Component } from 'react';
import styles from './index.module.css';
import Origami from '../../components/origami';
import Wrapper from '../../components/page-wrapper';
import UserContext from '../../Context';


class HomePage extends Component {
  static contextType = UserContext;

  render() {
    return (
      <Wrapper>

      <Origami />

    </Wrapper>
    );
  }
}

export default HomePage;


