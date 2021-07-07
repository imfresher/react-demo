import React from 'react';

function Sidebar(props) {
  return (
    <aside id="SideBar" className="AppSideBar">
      <ul className="Navigation__ul">
        <li className="nav__li">
          <a className="nav__item" href={'/'}>Item 1</a>
        </li>
        <li className="nav__li">
          <a className="nav__item" href={'/'}>Item 2</a>
          <ul className="nav__sub">
            <li className="nav__li">
              <a className="nav__item" href={'/'}>Item 21</a>
            </li>
            <li className="nav__li">
              <a className="nav__item" href={'/'}>Item 22</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
