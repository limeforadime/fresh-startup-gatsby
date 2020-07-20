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
import './styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSidebarOpen: false, isModalOpen: false };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
      isModalOpen: !prevState.isModalOpen,
    }));
  }

  closeSidebar() {
    this.setState({ isModalOpen: false, isSidebarOpen: false });
  }

  render() {
    return (
      <Fragment>
        <div className="grid-wrapper">
          <Header
            isSidebarOpen={this.state.isSidebarOpen}
            isModalOpen={this.state.isModalOpen}
            toggleSidebar={this.toggleSidebar}
            closeSidebar={this.closeSidebar}
          />
          <Hero />
          <Feature1 />
          <Feature2 />
          <Feature3 />
          <Testimonials />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
