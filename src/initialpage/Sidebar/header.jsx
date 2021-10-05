/**
 * App Header
 */
import React, { Component, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
  headerlogo, lnEnglish, lnFrench, lnSpanish, lnGerman, Avatar_02, Avatar_03, Avatar_05,
  Avatar_06, Avatar_08, Avatar_09, Avatar_13, Avatar_17, Avatar_21
} from '../../Entryfile/imagepath'
import { useReactOidc } from '@axa-fr/react-oidc-context';


const Header = () => {

  const { oidcUser, logout } = useReactOidc();
  const [name, setName] = useState("")
  useEffect(() => {
    if (oidcUser) {
      setName(oidcUser.profile.first_name)
    }
  })

  return (
    <div className="header" style={{ right: "0px" }}>
      {/* Logo */}
      <div className="header-left">
        <a href="/hive_hrm/app/employees/employee-dashboard" className="logo">
          <img src={headerlogo} width={40} height={40} alt="" />
        </a>
      </div>
      {/* /Logo */}
      {/* <a id="toggle_btn" href="" style={{ display: pathname.includes('tasks') ? "none" : pathname.includes('compose') ? "none" : "" }}> */}
      <a id="toggle_btn" href="" style={{ display: '' }}>
        <span className="bar-icon"><span />
          <span />
          <span />
        </span>
      </a>
      {/* Header Title */}
      <div className="page-title-box">
        <h3>Hive HRMS</h3>
      </div>
      {/* /Header Title */}
      <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars" /></a>
      {/* Header Menu */}
      <ul className="nav user-menu">
        {/* Search */}

        {/* /Search */}
        {/* Flag */}

        {/* /Flag */}
        {/* Notifications */}
        {/* <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="fa fa-bell-o" /> <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="" className="clear-noti"> Clear All </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="/hive_hrm/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_02} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                          <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/hive_hrm/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_03} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                          <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/hive_hrm/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_06} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                          <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/hive_hrm/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_17} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                          <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/hive_hrm/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_13} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                          <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="/hive_hrm/app/administrator/activities">View all Notifications</a>
              </div>
            </div>
          </li> */}
        {/* /Notifications */}

        {name ?
          <li className="nav-item dropdown has-arrow main-drop">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <span className="user-img"><img src={Avatar_21} alt="" />
                {/* <span className="status online" /> */}
              </span>
              <span>{name}</span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/hive_hrm/app/employees/employee-profile">My Profile</a>
              {/* <a className="dropdown-item" href="/hive_hrm/settings/companysetting">Settings</a> */}
              {/* <a className="dropdown-item" href="/hive_hrm/logout">Logout</a> */}
              <button className="dropdown-item" onClick={() => logout()} >Logout</button>

            </div>
          </li> : <li />}
      </ul>
      {/* /Header Menu */}
      {/* Mobile Menu */}
      {name && <div className="dropdown mobile-user-menu">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="/hive_hrm/app/employees/employee-profile">My Profile</a>
          {/* <a className="dropdown-item" href="/hive_hrm/settings/companysetting">Settings</a> */}
          <button className="dropdown-item" onClick={() => logout()} >Logout</button>
        </div>
      </div>}
      {/* /Mobile Menu */}
    </div>

  );
}


export default withRouter(Header);