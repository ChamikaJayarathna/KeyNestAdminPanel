import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button">
                <i className="bi bi-list" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;