import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import {
  Header,
  Hero,
  Feature1,
  Feature2,
  Feature3,
  Testimonials,
  Footer,
} from './components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="grid-wrapper">
          <Header />
          <Hero />
          <Feature1 />
          <Feature2 />
          <Feature3 />
          <Testimonials />
          <Footer />
        </div>
        <script src="/js/index.js"></script>
      </Fragment>
    );
  }
}

export default App;
