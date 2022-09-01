import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Feedback />
      </>
    );
  }
}
