/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
  render() {

    const { location } = this.props
    let pathname = location.pathname
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menue">
                <a className="active subdrop"><i className="la la-user" /> <span> Employee Portal</span> <span className="menu-arrow" /></a>
                <ul style={{ display: 'block' }}>
                  <li><a className={pathname.includes('dashboard') ? "active" : ""}
                    href="/hive_hrm/app/employees/employee-dashboard">Employee Dashboard</a></li>
                  <li><a className={pathname.includes('my-profile') ? "active" : ""} href="/hive_hrm/app/employees/my-profile"> My Profile </a></li>

                  <li><a className={pathname.includes('allemployees') ? "active" : pathname.includes('employees-list') ? "active" : ""}
                    href="/hive_hrm/app/employees/allemployees">All Employees</a></li>
                  <li><a className={pathname.includes('ce-employee') ? "active" : ""} href="/hive_hrm/app/employees/attendance-employee">Attendance</a></li>
                  <li><a className={pathname.includes('ves-employee') ? "active" : ""} href="/hive_hrm/app/employees/leaves-employee">Leaves</a></li>
                  <li><a className={pathname.includes('ves-approval') ? "active" : ""} href="/hive_hrm/app/employees/leaves-approval">Leaves approval</a></li>
                </ul>
              </li>
            <li className="active menue">
              <a className="active subdrop"><i className="la la-rocket" /> <span> HR Portal</span> <span className="menu-arrow" /></a>
              <ul style={{ display: 'block' }}>
                <li><a className={pathname.includes('admin/attendance') ? "active" : ""} href="/hive_hrm/app/hr/attendance">Attendance</a></li>
              </ul>
            </li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Sidebar);
