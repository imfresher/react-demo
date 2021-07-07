import React from 'react';
import Header from '../frontend/_partial/Header';
import Footer from '../frontend/_partial/Footer';
import Sidebar from '../frontend/_partial/Sidebar';

class FrontendLayout extends React.Component {
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <div className={className ? `FrontendLayout ${className}` : 'FrontendLayout'}>
        <Sidebar />
        <div className="AppContainer">
          <Header />
          <main id="AppMain" className="AppMain px-3">
            <div className="AppContent">
              { children }
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default FrontendLayout;
