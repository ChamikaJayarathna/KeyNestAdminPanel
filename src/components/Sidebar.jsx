import React from 'react';

const Sidebar = () => {
  return (
    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
    <div className="sidebar-brand">
      <a href="./index.html" className="brand-link">
        <img src="../../src/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" />
        <span className="brand-text fw-light">KeyNest Admin</span>
      </a>
    </div>
    <div className="sidebar-wrapper">
      <nav className="mt-2">
        <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">

          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon bi bi-speedometer" />
              <p>
                Dashboard
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Dashboard v1</p>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="./generate/theme.html" className="nav-link">
              <i className="nav-icon bi bi-palette" />
              <p>Theme Generate</p>
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </aside>
  );
}

export default Sidebar;