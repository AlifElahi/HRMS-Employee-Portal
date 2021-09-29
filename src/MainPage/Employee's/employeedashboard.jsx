/**
 * Signin Firebase
 */

import React, {useState,useEffect  } from 'react';
import { Helmet } from "react-helmet";
import { useReactOidc } from '@axa-fr/react-oidc-context';
import { Avatar_02, Avatar_04, Avatar_05, Avatar_07, Avatar_08, Avatar_09 } from '../../Entryfile/imagepath.jsx'
// import '../../assets/css/empdashstyle.css'
import {UserData} from '../../auth/clasess/Userdata'
export default function EmployeeDashboard() {
  let date=new Date()
  let day=`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`

  const [dt, setDt] = useState(day);
  const profile = new UserData().getProfile();
  

  let arr = [1, 2, 3, 5, 6, 7];
  return (

    <div className="page-wrapper">
      <Helmet>
        <title>Dashboard - HiveHrm</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="welcome-box">
              <div className="welcome-img">
                <img alt="" src={Avatar_02} />
              </div>
              <div className="welcome-det">
                <h3>{`Welcome,${profile.first_name}`}</h3>
                {/* <p>Monday, 20 May 2019</p> */}
                <p>{dt}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card punch-status" style={{ height: 485 }}>
              <div className="card-body">
                <h5 className="card-title">Timesheet <small className="text-muted">{dt}</small></h5>
                <div className="punch-det">
                  <h6>Punch In at</h6>
                  <p>Wed, 11th Mar 2019 10.00 AM</p>
                </div>
                <div className="punch-info-dash">
                  <div className="punch-hours">
                    <span>3.45 hrs</span>
                  </div>
                </div>
                <div className="punch-btn-section-dash">
                  <button type="button" className="btn btn-primary punch-btn">Punch Out</button>
                </div>
                <div className="statistics">
                  <div className="row">
                    <div className="col-md-6 col-6 text-center">
                      <div className="stats-box">
                        <p>Break</p>
                        <h6>1.21 hrs</h6>
                      </div>
                    </div>
                    <div className="col-md-6 col-6 text-center">
                      <div className="stats-box">
                        <p>Overtime</p>
                        <h6>3 hrs</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dash-sidebar">
              <section>
                <div className="card" style={{ height: 270 }}>
                  <div className="card-body">
                    <h5 className="card-title">Notice</h5>
                    <div style={{ overflow: 'auto', height: 200, paddingBottom: '20px', paddingTop: '20px' }}>
                      {arr.map((x, idx) => <div className="card" style={{ backgroundColor: "#f9f9f9f9" }} key={idx}>
                        <div className="card-body text-center">
                          <h4 className="holiday-title mb-0">
                            {`abcdef${idx}`}
                          </h4>
                        </div>
                      </div>)}
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Your Leave</h5>
                    <div className="time-list">
                      <div className="dash-stats-list">
                        <h4>4.5</h4>
                        <p>Leave Taken</p>
                      </div>
                      <div className="dash-stats-list">
                        <h4>12</h4>
                        <p>Remaining</p>
                      </div>
                    </div>
                    <div className="request-btn">
                      <a className="btn btn-primary" href="#">Apply Leave</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
}



