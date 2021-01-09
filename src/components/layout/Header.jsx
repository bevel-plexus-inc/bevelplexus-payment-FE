import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import UserContext from "../../context/user/userContext";
import { Dropdown, Button } from "antd";

const base = process.env.REACT_APP_BASEURL

function Header({
  withRightSidebar,
  collapseRightSidebar,
  rightSidebarStatus,
  toggleSidebar,
  sidebarStatus,
  animateSidebar,
}) {

  const userContext = useContext(UserContext);

  const menu = (
    <div id="profile-dropdown">
      <ul>
        <li><Link to='/account'>View my account</Link></li>
        <li><Link to='/transactions'>Transaction history</Link></li>
      </ul>

      <Link to='/' className='logout-link' >Logout</Link>
    </div>
  );

  const notifications = (
    <div id='notifications-dropdown'>
      <div className='pointer'></div>
      <div className='top-border'></div>

      <ul>
        <li>
          <img src={`${base}assets/svg/greendot.svg`} alt='' />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit nostrud amet.
          </p>
        </li>

        <li>
          <img src={`${base}assets/svg/greendot.svg`} alt='' />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
          </p>
        </li>

        <li>
          <img src={`${base}assets/svg/greendot.svg`} alt='' />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
          </p>
        </li>

        <li>
          <img src={`${base}assets/svg/orangecheck.svg`} alt='' />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
          </p>
        </li>

        <li>
          <img src={`${base}assets/svg/orangecheck.svg`} alt='' />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
          </p>
        </li>
      </ul>
    </div>
  );

  return (
    <header>
      <div className='left-container'>
        <button
          onClick={() => [toggleSidebar(!sidebarStatus), animateSidebar(true)]}
        >
          <span className='material-icons'>menu</span>
        </button>
        <img src={`${base}assets/svg/logo.svg`} alt='bevel plexus logo' />
      </div>

      <div className='profile-summary'>
        <div className='notifications'>
          <Dropdown overlay={notifications} placement='bottomRight'>
            <div>
              <img src={`${base}assets/svg/bell-icon.svg`} alt='notigications' />
              <span></span>
            </div>
          </Dropdown>
        </div>

        <Dropdown overlay={menu} placement='bottomRight' arrow>
          <Button>
            <img src={`${base}assets/svg/avatar.svg`} alt='avi' className='avatar' />
            <span className='profile-name'>{userContext.state.user.firstName} {userContext.state.user.lastName} </span>
            <span className='material-icons'>arrow_drop_down</span>
          </Button>
        </Dropdown>

        {withRightSidebar && (
          <div className='right-menu'>
            <button onClick={() => collapseRightSidebar(!rightSidebarStatus)}>
              <span className='material-icons'>menu_open</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
