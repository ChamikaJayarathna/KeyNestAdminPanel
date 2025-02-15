import React from 'react';

const Test = () => {

    const SELECTOR_SIDEBAR_WRAPPER = '.sidebar-wrapper';
      const Default = {
        scrollbarTheme: 'os-theme-light',
        scrollbarAutoHide: 'leave',
        scrollbarClickScroll: true,
      };
      document.addEventListener('DOMContentLoaded', function () {
        const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER);
        if (sidebarWrapper && typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== 'undefined') {
          OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {
            scrollbars: {
              theme: Default.scrollbarTheme,
              autoHide: Default.scrollbarAutoHide,
              clickScroll: Default.scrollbarClickScroll,
            },
          });
        }
      });

  return (
    <div className="app-wrapper">
  {/*begin::Header*/}
  <nav className="app-header navbar navbar-expand bg-body">
    {/*begin::Container*/}
    <div className="container-fluid">
      {/*begin::Start Navbar Links*/}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button">
            <i className="bi bi-list" />
          </a>
        </li>
        <li className="nav-item d-none d-md-block"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item d-none d-md-block"><a href="#" className="nav-link">Contact</a></li>
      </ul>
      {/*end::Start Navbar Links*/}
      {/*begin::End Navbar Links*/}
      <ul className="navbar-nav ms-auto">
        {/*begin::Navbar Search*/}
        <li className="nav-item">
          <a className="nav-link" data-widget="navbar-search" href="#" role="button">
            <i className="bi bi-search" />
          </a>
        </li>
        {/*end::Navbar Search*/}
        {/*begin::Messages Dropdown Menu*/}
        <li className="nav-item dropdown">
          <a className="nav-link" data-bs-toggle="dropdown" href="#">
            <i className="bi bi-chat-text" />
            <span className="navbar-badge badge text-bg-danger">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <a href="#" className="dropdown-item">
              {/*begin::Message*/}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="../../src/assets/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" />
                </div>
                <div className="flex-grow-1">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-end fs-7 text-danger"><i className="bi bi-star-fill" /></span>
                  </h3>
                  <p className="fs-7">Call me whenever you can...</p>
                  <p className="fs-7 text-secondary">
                    <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
                  </p>
                </div>
              </div>
              {/*end::Message*/}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/*begin::Message*/}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="../../src/assets/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" />
                </div>
                <div className="flex-grow-1">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-end fs-7 text-secondary">
                      <i className="bi bi-star-fill" />
                    </span>
                  </h3>
                  <p className="fs-7">I got your message bro</p>
                  <p className="fs-7 text-secondary">
                    <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
                  </p>
                </div>
              </div>
              {/*end::Message*/}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/*begin::Message*/}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="../../src/assets/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 rounded-circle me-3" />
                </div>
                <div className="flex-grow-1">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-end fs-7 text-warning">
                      <i className="bi bi-star-fill" />
                    </span>
                  </h3>
                  <p className="fs-7">The subject goes here</p>
                  <p className="fs-7 text-secondary">
                    <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
                  </p>
                </div>
              </div>
              {/*end::Message*/}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        {/*end::Messages Dropdown Menu*/}
        {/*begin::Notifications Dropdown Menu*/}
        <li className="nav-item dropdown">
          <a className="nav-link" data-bs-toggle="dropdown" href="#">
            <i className="bi bi-bell-fill" />
            <span className="navbar-badge badge text-bg-warning">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="bi bi-envelope me-2" /> 4 new messages
              <span className="float-end text-secondary fs-7">3 mins</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="bi bi-people-fill me-2" /> 8 friend requests
              <span className="float-end text-secondary fs-7">12 hours</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="bi bi-file-earmark-fill me-2" /> 3 new reports
              <span className="float-end text-secondary fs-7">2 days</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer"> See All Notifications </a>
          </div>
        </li>
        {/*end::Notifications Dropdown Menu*/}
        {/*begin::Fullscreen Toggle*/}
        <li className="nav-item">
          <a className="nav-link" href="#" data-lte-toggle="fullscreen">
            <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
            <i data-lte-icon="minimize" className="bi bi-fullscreen-exit" style={{display: 'none'}} />
          </a>
        </li>
        {/*end::Fullscreen Toggle*/}
        {/*begin::User Menu Dropdown*/}
        <li className="nav-item dropdown user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <img src="../../src/assets/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="User Image" />
            <span className="d-none d-md-inline">Alexander Pierce</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            {/*begin::User Image*/}
            <li className="user-header text-bg-primary">
              <img src="../../src/assets/img/user2-160x160.jpg" className="rounded-circle shadow" alt="User Image" />
              <p>
                Alexander Pierce - Web Developer
                <small>Member since Nov. 2023</small>
              </p>
            </li>
            {/*end::User Image*/}
            {/*begin::Menu Body*/}
            <li className="user-body">
              {/*begin::Row*/}
              <div className="row">
                <div className="col-4 text-center"><a href="#">Followers</a></div>
                <div className="col-4 text-center"><a href="#">Sales</a></div>
                <div className="col-4 text-center"><a href="#">Friends</a></div>
              </div>
              {/*end::Row*/}
            </li>
            {/*end::Menu Body*/}
            {/*begin::Menu Footer*/}
            <li className="user-footer">
              <a href="#" className="btn btn-default btn-flat">Profile</a>
              <a href="#" className="btn btn-default btn-flat float-end">Sign out</a>
            </li>
            {/*end::Menu Footer*/}
          </ul>
        </li>
        {/*end::User Menu Dropdown*/}
      </ul>
      {/*end::End Navbar Links*/}
    </div>
    {/*end::Container*/}
  </nav>
  {/*end::Header*/}
  {/*begin::Sidebar*/}
  <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
    {/*begin::Sidebar Brand*/}
    <div className="sidebar-brand">
      {/*begin::Brand Link*/}
      <a href="./index.html" className="brand-link">
        {/*begin::Brand Image*/}
        <img src="../../src/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" />
        {/*end::Brand Image*/}
        {/*begin::Brand Text*/}
        <span className="brand-text fw-light">AdminLTE 4</span>
        {/*end::Brand Text*/}
      </a>
      {/*end::Brand Link*/}
    </div>
    {/*end::Sidebar Brand*/}
    {/*begin::Sidebar Wrapper*/}
    <div className="sidebar-wrapper">
      <nav className="mt-2">
        {/*begin::Sidebar Menu*/}
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
              <li className="nav-item">
                <a href="./index2.html" className="nav-link active">
                  <i className="nav-icon bi bi-circle" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Dashboard v3</p>
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
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-box-seam-fill" />
              <p>
                Widgets
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./widgets/small-box.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Small Box</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./widgets/info-box.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>info Box</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./widgets/cards.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Cards</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-clipboard-fill" />
              <p>
                Layout Options
                <span className="nav-badge badge text-bg-secondary me-3">6</span>
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./layout/unfixed-sidebar.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Default Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./layout/fixed-sidebar.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./layout/layout-custom-area.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Layout <small>+ Custom Area </small></p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./layout/sidebar-mini.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Sidebar Mini</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./layout/collapsed-sidebar.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Sidebar Mini <small>+ Collapsed</small></p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./layout/logo-switch.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Sidebar Mini <small>+ Logo Switch</small></p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./layout/layout-rtl.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Layout RTL</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-tree-fill" />
              <p>
                UI Elements
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./UI/general.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>General</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./UI/icons.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Icons</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./UI/timeline.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Timeline</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-pencil-square" />
              <p>
                Forms
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./forms/general.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>General Elements</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-table" />
              <p>
                Tables
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./tables/simple.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Simple Tables</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">EXAMPLES</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-box-arrow-in-right" />
              <p>
                Auth
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-box-arrow-in-right" />
                  <p>
                    Version 1
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./examples/login.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Login</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./examples/register.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Register</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-box-arrow-in-right" />
                  <p>
                    Version 2
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./examples/login-v2.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Login</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./examples/register-v2.html" className="nav-link">
                      <i className="nav-icon bi bi-circle" />
                      <p>Register</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="./examples/lockscreen.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Lockscreen</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">DOCUMENTATIONS</li>
          <li className="nav-item">
            <a href="./docs/introduction.html" className="nav-link">
              <i className="nav-icon bi bi-download" />
              <p>Installation</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./docs/layout.html" className="nav-link">
              <i className="nav-icon bi bi-grip-horizontal" />
              <p>Layout</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./docs/color-mode.html" className="nav-link">
              <i className="nav-icon bi bi-star-half" />
              <p>Color Mode</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-ui-checks-grid" />
              <p>
                Components
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./docs/components/main-header.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Main Header</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./docs/components/main-sidebar.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Main Sidebar</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-filetype-js" />
              <p>
                Javascript
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./docs/javascript/treeview.html" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Treeview</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="./docs/browser-support.html" className="nav-link">
              <i className="nav-icon bi bi-browser-edge" />
              <p>Browser Support</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./docs/how-to-contribute.html" className="nav-link">
              <i className="nav-icon bi bi-hand-thumbs-up-fill" />
              <p>How To Contribute</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./docs/faq.html" className="nav-link">
              <i className="nav-icon bi bi-question-circle-fill" />
              <p>FAQ</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./docs/license.html" className="nav-link">
              <i className="nav-icon bi bi-patch-check-fill" />
              <p>License</p>
            </a>
          </li>
          <li className="nav-header">MULTI LEVEL EXAMPLE</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-circle-fill" />
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-circle-fill" />
              <p>
                Level 1
                <i className="nav-arrow bi bi-chevron-right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Level 2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>
                    Level 2
                    <i className="nav-arrow bi bi-chevron-right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-record-circle-fill" />
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-record-circle-fill" />
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon bi bi-record-circle-fill" />
                      <p>Level 3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon bi bi-circle" />
                  <p>Level 2</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-circle-fill" />
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-header">LABELS</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-circle text-danger" />
              <p className="text">Important</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-circle text-warning" />
              <p>Warning</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon bi bi-circle text-info" />
              <p>Informational</p>
            </a>
          </li>
        </ul>
        {/*end::Sidebar Menu*/}
      </nav>
    </div>
    {/*end::Sidebar Wrapper*/}
  </aside>
  {/*end::Sidebar*/}
  {/*begin::App Main*/}
  <main className="app-main">
    {/*begin::App Content Header*/}
    <div className="app-content-header">
      {/*begin::Container*/}
      <div className="container-fluid">
        {/*begin::Row*/}
        <div className="row">
          <div className="col-sm-6"><h3 className="mb-0">Dashboard v2</h3></div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-end">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard v2</li>
            </ol>
          </div>
        </div>
        {/*end::Row*/}
      </div>
      {/*end::Container*/}
    </div>
    <div className="app-content">
      {/*begin::Container*/}
      <div className="container-fluid">
        {/* Info boxes */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon text-bg-primary shadow-sm">
                <i className="bi bi-gear-fill" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">CPU Traffic</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon text-bg-danger shadow-sm">
                <i className="bi bi-hand-thumbs-up-fill" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">41,410</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          {/* fix for small devices only */}
          {/* <div class="clearfix hidden-md-up"></div> */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon text-bg-success shadow-sm">
                <i className="bi bi-cart-fill" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Sales</span>
                <span className="info-box-number">760</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon text-bg-warning shadow-sm">
                <i className="bi bi-people-fill" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">New Members</span>
                <span className="info-box-number">2,000</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
        {/*begin::Row*/}
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title">Monthly Recap Report</h5>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" className="bi bi-plus-lg" />
                    <i data-lte-icon="collapse" className="bi bi-dash-lg" />
                  </button>
                  <div className="btn-group">
                    <button type="button" className="btn btn-tool dropdown-toggle" data-bs-toggle="dropdown">
                      <i className="bi bi-wrench" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" role="menu">
                      <a href="#" className="dropdown-item">Action</a>
                      <a href="#" className="dropdown-item">Another action</a>
                      <a href="#" className="dropdown-item"> Something else here </a>
                      <a className="dropdown-divider" />
                      <a href="#" className="dropdown-item">Separated link</a>
                    </div>
                  </div>
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                    <i className="bi bi-x-lg" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                {/*begin::Row*/}
                <div className="row">
                  <div className="col-md-8">
                    <p className="text-center">
                      <strong>Sales: 1 Jan, 2023 - 30 Jul, 2023</strong>
                    </p>
                    <div id="sales-chart" />
                  </div>
                  {/* /.col */}
                  <div className="col-md-4">
                    <p className="text-center"><strong>Goal Completion</strong></p>
                    <div className="progress-group">
                      Add Products to Cart
                      <span className="float-end"><b>160</b>/200</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar text-bg-primary" style={{width: '80%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      Complete Purchase
                      <span className="float-end"><b>310</b>/400</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar text-bg-danger" style={{width: '75%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      <span className="progress-text">Visit Premium Page</span>
                      <span className="float-end"><b>480</b>/800</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar text-bg-success" style={{width: '60%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                    <div className="progress-group">
                      Send Inquiries
                      <span className="float-end"><b>250</b>/500</span>
                      <div className="progress progress-sm">
                        <div className="progress-bar text-bg-warning" style={{width: '50%'}} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                  </div>
                  {/* /.col */}
                </div>
                {/*end::Row*/}
              </div>
              {/* ./card-body */}
              <div className="card-footer">
                {/*begin::Row*/}
                <div className="row">
                  <div className="col-md-3 col-6">
                    <div className="text-center border-end">
                      <span className="text-success">
                        <i className="bi bi-caret-up-fill" /> 17%
                      </span>
                      <h5 className="fw-bold mb-0">$35,210.43</h5>
                      <span className="text-uppercase">TOTAL REVENUE</span>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-md-3 col-6">
                    <div className="text-center border-end">
                      <span className="text-info"> <i className="bi bi-caret-left-fill" /> 0% </span>
                      <h5 className="fw-bold mb-0">$10,390.90</h5>
                      <span className="text-uppercase">TOTAL COST</span>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-md-3 col-6">
                    <div className="text-center border-end">
                      <span className="text-success">
                        <i className="bi bi-caret-up-fill" /> 20%
                      </span>
                      <h5 className="fw-bold mb-0">$24,813.53</h5>
                      <span className="text-uppercase">TOTAL PROFIT</span>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-md-3 col-6">
                    <div className="text-center">
                      <span className="text-danger">
                        <i className="bi bi-caret-down-fill" /> 18%
                      </span>
                      <h5 className="fw-bold mb-0">1200</h5>
                      <span className="text-uppercase">GOAL COMPLETIONS</span>
                    </div>
                  </div>
                </div>
                {/*end::Row*/}
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/*end::Row*/}
        {/*begin::Row*/}
        <div className="row">
          {/* Start col */}
          <div className="col-md-8">
            {/*begin::Row*/}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                {/* DIRECT CHAT */}
                <div className="card direct-chat direct-chat-warning">
                  <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge text-bg-warning"> 3 </span>
                      <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                        <i data-lte-icon="expand" className="bi bi-plus-lg" />
                        <i data-lte-icon="collapse" className="bi bi-dash-lg" />
                      </button>
                      <button type="button" className="btn btn-tool" title="Contacts" data-lte-toggle="chat-pane">
                        <i className="bi bi-chat-text-fill" />
                      </button>
                      <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                        <i className="bi bi-x-lg" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the start */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-start"> Alexander Pierce </span>
                          <span className="direct-chat-timestamp float-end"> 23 Jan 2:00 pm </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="../../src/assets/img/user1-128x128.jpg" alt="message user image" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the end */}
                      <div className="direct-chat-msg end">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-end"> Sarah Bullock </span>
                          <span className="direct-chat-timestamp float-start">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="../../src/assets/img/user3-128x128.jpg" alt="message user image" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">You better believe it!</div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message. Default to the start */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-start"> Alexander Pierce </span>
                          <span className="direct-chat-timestamp float-end"> 23 Jan 5:37 pm </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="../../src/assets/img/user1-128x128.jpg" alt="message user image" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Working with AdminLTE on a great new app! Wanna join?
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the end */}
                      <div className="direct-chat-msg end">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-end"> Sarah Bullock </span>
                          <span className="direct-chat-timestamp float-start">
                            23 Jan 6:10 pm
                          </span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="../../src/assets/img/user3-128x128.jpg" alt="message user image" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">I would love to.</div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/* /.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img className="contacts-list-img" src="../../src/assets/img/user1-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-end"> 2/28/2023 </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="#">
                            <img className="contacts-list-img" src="../../src/assets/img/user7-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Sarah Doe
                                <small className="contacts-list-date float-end"> 2/23/2023 </small>
                              </span>
                              <span className="contacts-list-msg"> I will be waiting for... </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="#">
                            <img className="contacts-list-img" src="../../src/assets/img/user3-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Nadia Jolie
                                <small className="contacts-list-date float-end"> 2/20/2023 </small>
                              </span>
                              <span className="contacts-list-msg"> I'll call you back at... </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="#">
                            <img className="contacts-list-img" src="../../src/assets/img/user5-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Nora S. Vans
                                <small className="contacts-list-date float-end"> 2/10/2023 </small>
                              </span>
                              <span className="contacts-list-msg"> Where is your new... </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="#">
                            <img className="contacts-list-img" src="../../src/assets/img/user6-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                John K.
                                <small className="contacts-list-date float-end"> 1/27/2023 </small>
                              </span>
                              <span className="contacts-list-msg"> Can I take a look at... </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="#">
                            <img className="contacts-list-img" src="../../src/assets/img/user8-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Kenneth M.
                                <small className="contacts-list-date float-end"> 1/4/2023 </small>
                              </span>
                              <span className="contacts-list-msg"> Never mind I found... </span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contacts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                        <span className="input-group-append">
                          <button type="button" className="btn btn-warning">Send</button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/* /.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-6">
                {/* USERS LIST */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Latest Members</h3>
                    <div className="card-tools">
                      <span className="badge text-bg-danger"> 8 New Members </span>
                      <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                        <i data-lte-icon="expand" className="bi bi-plus-lg" />
                        <i data-lte-icon="collapse" className="bi bi-dash-lg" />
                      </button>
                      <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                        <i className="bi bi-x-lg" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <div className="row text-center m-1">
                      <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../src/assets/img/user1-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                          Alexander Pierce
                        </a>
                        <div className="fs-8">Today</div>
                      </div>
                      <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../src/assets/img/user1-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                          Norman
                        </a>
                        <div className="fs-8">Yesterday</div>
                      </div>
                      <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../src/assets/img/user7-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                          Jane
                        </a>
                        <div className="fs-8">12 Jan</div>
                      </div>
                      <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../src/assets/img/user6-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                          John
                        </a>
                        <div className="fs-8">12 Jan</div>
                      </div>
                      <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../src/assets/img/user2-160x160.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                          Alexander
                        </a>
                        <div className="fs-8">13 Jan</div>
                      </div>
                      <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../src/assets/img/user5-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                          Sarah
                        </a>
                        <div className="fs-8">14 Jan</div>
                      </div>
                      <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../src/assets/img/user4-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                          Nora
                        </a>
                        <div className="fs-8">15 Jan</div>
                      </div>
                      <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../src/assets/img/user3-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                          Nadia
                        </a>
                        <div className="fs-8">15 Jan</div>
                      </div>
                    </div>
                    {/* /.users-list */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer text-center">
                    <a href="javascript:" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View All Users</a>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/*end::Row*/}
            {/*begin::Latest Order Widget*/}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Latest Orders</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" className="bi bi-plus-lg" />
                    <i data-lte-icon="collapse" className="bi bi-dash-lg" />
                  </button>
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                    <i className="bi bi-x-lg" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Status</th>
                        <th>Popularity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="pages/examples/invoice.html" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR9842</a>
                        </td>
                        <td>Call of Duty IV</td>
                        <td><span className="badge text-bg-success"> Shipped </span></td>
                        <td><div id="table-sparkline-1" /></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="pages/examples/invoice.html" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR1848</a>
                        </td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge text-bg-warning">Pending</span></td>
                        <td><div id="table-sparkline-2" /></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="pages/examples/invoice.html" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR7429</a>
                        </td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="badge text-bg-danger"> Delivered </span></td>
                        <td><div id="table-sparkline-3" /></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="pages/examples/invoice.html" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR7429</a>
                        </td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge text-bg-info">Processing</span></td>
                        <td><div id="table-sparkline-4" /></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="pages/examples/invoice.html" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR1848</a>
                        </td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge text-bg-warning">Pending</span></td>
                        <td><div id="table-sparkline-5" /></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="pages/examples/invoice.html" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR7429</a>
                        </td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="badge text-bg-danger"> Delivered </span></td>
                        <td><div id="table-sparkline-6" /></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="pages/examples/invoice.html" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR9842</a>
                        </td>
                        <td>Call of Duty IV</td>
                        <td><span className="badge text-bg-success">Shipped</span></td>
                        <td><div id="table-sparkline-7" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.table-responsive */}
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <a href="javascript:void(0)" className="btn btn-sm btn-primary float-start">
                  Place New Order
                </a>
                <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-end">
                  View All Orders
                </a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
          <div className="col-md-4">
            {/* Info Boxes Style 2 */}
            <div className="info-box mb-3 text-bg-warning">
              <span className="info-box-icon"> <i className="bi bi-tag-fill" /> </span>
              <div className="info-box-content">
                <span className="info-box-text">Inventory</span>
                <span className="info-box-number">5,200</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 text-bg-success">
              <span className="info-box-icon"> <i className="bi bi-heart-fill" /> </span>
              <div className="info-box-content">
                <span className="info-box-text">Mentions</span>
                <span className="info-box-number">92,050</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 text-bg-danger">
              <span className="info-box-icon"> <i className="bi bi-cloud-download" /> </span>
              <div className="info-box-content">
                <span className="info-box-text">Downloads</span>
                <span className="info-box-number">114,381</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 text-bg-info">
              <span className="info-box-icon"> <i className="bi bi-chat-fill" /> </span>
              <div className="info-box-content">
                <span className="info-box-text">Direct Messages</span>
                <span className="info-box-number">163,921</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="card mb-4">
              <div className="card-header">
                <h3 className="card-title">Browser Usage</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" className="bi bi-plus-lg" />
                    <i data-lte-icon="collapse" className="bi bi-dash-lg" />
                  </button>
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                    <i className="bi bi-x-lg" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                {/*begin::Row*/}
                <div className="row">
                  <div className="col-12"><div id="pie-chart" /></div>
                  {/* /.col */}
                </div>
                {/*end::Row*/}
              </div>
              {/* /.card-body */}
              <div className="card-footer p-0">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      United States of America
                      <span className="float-end text-danger">
                        <i className="bi bi-arrow-down fs-7" />
                        12%
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      India
                      <span className="float-end text-success">
                        <i className="bi bi-arrow-up fs-7" /> 4%
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      China
                      <span className="float-end text-info">
                        <i className="bi bi-arrow-left fs-7" /> 0%
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.footer */}
            </div>
            {/* /.card */}
            {/* PRODUCT LIST */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Recently Added Products</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                    <i data-lte-icon="expand" className="bi bi-plus-lg" />
                    <i data-lte-icon="collapse" className="bi bi-dash-lg" />
                  </button>
                  <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                    <i className="bi bi-x-lg" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="px-2">
                  <div className="d-flex border-top py-2 px-1">
                    <div className="col-2">
                      <img src="../../src/assets/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                    </div>
                    <div className="col-10">
                      <a href="javascript:void(0)" className="fw-bold">
                        Samsung TV
                        <span className="badge text-bg-warning float-end"> $1800 </span>
                      </a>
                      <div className="text-truncate">Samsung 32" 1080p 60Hz LED Smart HDTV.</div>
                    </div>
                  </div>
                  {/* /.item */}
                  <div className="d-flex border-top py-2 px-1">
                    <div className="col-2">
                      <img src="../../src/assets/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                    </div>
                    <div className="col-10">
                      <a href="javascript:void(0)" className="fw-bold">
                        Bicycle
                        <span className="badge text-bg-info float-end"> $700 </span>
                      </a>
                      <div className="text-truncate">
                        26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                      </div>
                    </div>
                  </div>
                  {/* /.item */}
                  <div className="d-flex border-top py-2 px-1">
                    <div className="col-2">
                      <img src="../../src/assets/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                    </div>
                    <div className="col-10">
                      <a href="javascript:void(0)" className="fw-bold">
                        Xbox One
                        <span className="badge text-bg-danger float-end"> $350 </span>
                      </a>
                      <div className="text-truncate">
                        Xbox One Console Bundle with Halo Master Chief Collection.
                      </div>
                    </div>
                  </div>
                  {/* /.item */}
                  <div className="d-flex border-top py-2 px-1">
                    <div className="col-2">
                      <img src="../../src/assets/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                    </div>
                    <div className="col-10">
                      <a href="javascript:void(0)" className="fw-bold">
                        PlayStation 4
                        <span className="badge text-bg-success float-end"> $399 </span>
                      </a>
                      <div className="text-truncate">PlayStation 4 500GB Console (PS4)</div>
                    </div>
                  </div>
                  {/* /.item */}
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer text-center">
                <a href="javascript:void(0)" className="uppercase"> View All Products </a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/*end::Row*/}
      </div>
      {/*end::Container*/}
    </div>
    {/*end::App Content*/}
  </main>
  {/*end::App Main*/}
  {/*begin::Footer*/}
  <footer className="app-footer">
    {/*begin::To the end*/}
    <div className="float-end d-none d-sm-inline">Anything you want</div>
    {/*end::To the end*/}
    {/*begin::Copyright*/}
    <strong>
      Copyright © 2014-2024&nbsp;
      <a href="https://adminlte.io" className="text-decoration-none">AdminLTE.io</a>.
    </strong>
    All rights reserved.
    {/*end::Copyright*/}
  </footer>
  {/*end::Footer*/}
</div>

  );
}

export default Test;