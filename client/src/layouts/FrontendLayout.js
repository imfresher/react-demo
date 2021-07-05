import React from 'react';
import Header from './frontend/Header';
import Footer from './frontend/Footer';
import SideBar from './frontend/SideBar';

class FrontendLayout extends React.Component {
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <div className={className ? `FrontendLayout ${className}` : 'FrontendLayout'}>
        <SideBar />
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
