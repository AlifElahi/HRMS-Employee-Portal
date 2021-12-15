


import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_01, Avatar_04, Avatar_05, Avatar_09, Avatar_10, Avatar_11, Avatar_12, Avatar_13, Avatar_16 } from "../../Entryfile/imagepath"
import ReactExport from '@ibrahimrahmani/react-export-excel';
import { DataShaperforExcele } from '../../Services/Helper';
// import ReactExport from 'react-export-excel';



const Attendance_Hr = () => {

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  ////dummy data structure =  dataset1
  const dataset1 = [
    {
      employee: {
        name: "abc",
        id: "124",
        img: ''
      },
      attendance: [
        {
          date: '01-01-22',
          isPresent: true
        },
        {
          date: '02-01-22',
          isPresent: true
        },
        {
          date: '03-01-22',
          isPresent: true
        },
        {
          date: '04-01-22',
          isPresent: true
        },
        {
          date: '05-01-22',
          isPresent: true
        },
        {
          date: '06-01-22',
          isPresent: true
        },
        {
          date: '07-01-22',
          isPresent: true
        },
        {
          date: '08-01-22',
          isPresent: true
        },
        {
          date: '09-01-22',
          isPresent: true
        },
        {
          date: '10-01-22',
          isPresent: true
        },
        {
          date: '11-01-22',
          isPresent: true
        },
        {
          date: '12-01-22',
          isPresent: true
        },
        {
          date: '13-01-22',
          isPresent: true
        },
        {
          date: '14-01-22',
          isPresent: true
        },
        {
          date: '15-01-22',
          isPresent: true
        },
        {
          date: '16-01-22',
          isPresent: true
        },
        {
          date: '17-01-22',
          isPresent: true
        },
        {
          date: '18-01-22',
          isPresent: true
        },
        {
          date: '19-01-22',
          isPresent: true
        },
        {
          date: '20-01-22',
          isPresent: true
        },
        {
          date: '21-01-22',
          isPresent: true
        },
        {
          date: '22-01-22',
          isPresent: false
        },
        {
          date: '23-01-22',
          isPresent: true
        },
        {
          date: '24-01-22',
          isPresent: false
        },
        {
          date: '25-01-22',
          isPresent: true
        },
        {
          date: '26-01-22',
          isPresent: false
        },
        {
          date: '27-01-22',
          isPresent: true
        },
        {
          date: '28-01-22',
          isPresent: true
        },
        {
          date: '29-01-22',
          isPresent: true
        },
        {
          date: '30-01-22',
          isPresent: false
        },
      ]
    },
    {
      employee: {
        name: "abc",
        id: "124",
        img: ''
      },
      attendance: [
        {
          date: '01-01-22',
          isPresent: true
        },
        {
          date: '02-01-22',
          isPresent: true
        },
        {
          date: '03-01-22',
          isPresent: true
        },
        {
          date: '04-01-22',
          isPresent: true
        },
        {
          date: '05-01-22',
          isPresent: true
        },
        {
          date: '06-01-22',
          isPresent: true
        },
        {
          date: '07-01-22',
          isPresent: true
        },
        {
          date: '08-01-22',
          isPresent: true
        },
        {
          date: '09-01-22',
          isPresent: true
        },
        {
          date: '10-01-22',
          isPresent: true
        },
        {
          date: '11-01-22',
          isPresent: true
        },
        {
          date: '12-01-22',
          isPresent: true
        },
        {
          date: '13-01-22',
          isPresent: true
        },
        {
          date: '14-01-22',
          isPresent: true
        },
        {
          date: '15-01-22',
          isPresent: true
        },
        {
          date: '16-01-22',
          isPresent: true
        },
        {
          date: '17-01-22',
          isPresent: true
        },
        {
          date: '18-01-22',
          isPresent: true
        },
        {
          date: '19-01-22',
          isPresent: true
        },
        {
          date: '20-01-22',
          isPresent: true
        },
        {
          date: '21-01-22',
          isPresent: true
        },
        {
          date: '22-01-22',
          isPresent: false
        },
        {
          date: '23-01-22',
          isPresent: true
        },
        {
          date: '24-01-22',
          isPresent: false
        },
        {
          date: '25-01-22',
          isPresent: true
        },
        {
          date: '26-01-22',
          isPresent: false
        },
        {
          date: '27-01-22',
          isPresent: true
        },
        {
          date: '28-01-22',
          isPresent: true
        },
        {
          date: '29-01-22',
          isPresent: true
        },
        {
          date: '30-01-22',
          isPresent: false
        },
      ]
    },
    {
      employee: {
        name: "abc",
        id: "124",
        img: ''
      },
      attendance: [
        {
          date: '01-01-22',
          isPresent: true
        },
        {
          date: '02-01-22',
          isPresent: true
        },
        {
          date: '03-01-22',
          isPresent: true
        },
        {
          date: '04-01-22',
          isPresent: true
        },
        {
          date: '05-01-22',
          isPresent: true
        },
        {
          date: '06-01-22',
          isPresent: true
        },
        {
          date: '07-01-22',
          isPresent: true
        },
        {
          date: '08-01-22',
          isPresent: true
        },
        {
          date: '09-01-22',
          isPresent: true
        },
        {
          date: '10-01-22',
          isPresent: true
        },
        {
          date: '11-01-22',
          isPresent: true
        },
        {
          date: '12-01-22',
          isPresent: true
        },
        {
          date: '13-01-22',
          isPresent: true
        },
        {
          date: '14-01-22',
          isPresent: true
        },
        {
          date: '15-01-22',
          isPresent: true
        },
        {
          date: '16-01-22',
          isPresent: true
        },
        {
          date: '17-01-22',
          isPresent: true
        },
        {
          date: '18-01-22',
          isPresent: true
        },
        {
          date: '19-01-22',
          isPresent: true
        },
        {
          date: '20-01-22',
          isPresent: true
        },
        {
          date: '21-01-22',
          isPresent: true
        },
        {
          date: '22-01-22',
          isPresent: false
        },
        {
          date: '23-01-22',
          isPresent: true
        },
        {
          date: '24-01-22',
          isPresent: false
        },
        {
          date: '25-01-22',
          isPresent: true
        },
        {
          date: '26-01-22',
          isPresent: false
        },
        {
          date: '27-01-22',
          isPresent: true
        },
        {
          date: '28-01-22',
          isPresent: true
        },
        {
          date: '29-01-22',
          isPresent: true
        },
        {
          date: '30-01-22',
          isPresent: false
        },
      ]
    },
    {
      employee: {
        name: "abc",
        id: "124",
        img: ''
      },
      attendance: [
        {
          date: '01-01-22',
          isPresent: true
        },
        {
          date: '02-01-22',
          isPresent: true
        },
        {
          date: '03-01-22',
          isPresent: true
        },
        {
          date: '04-01-22',
          isPresent: true
        },
        {
          date: '05-01-22',
          isPresent: true
        },
        {
          date: '06-01-22',
          isPresent: true
        },
        {
          date: '07-01-22',
          isPresent: true
        },
        {
          date: '08-01-22',
          isPresent: true
        },
        {
          date: '09-01-22',
          isPresent: true
        },
        {
          date: '10-01-22',
          isPresent: true
        },
        {
          date: '11-01-22',
          isPresent: true
        },
        {
          date: '12-01-22',
          isPresent: true
        },
        {
          date: '13-01-22',
          isPresent: true
        },
        {
          date: '14-01-22',
          isPresent: true
        },
        {
          date: '15-01-22',
          isPresent: true
        },
        {
          date: '16-01-22',
          isPresent: true
        },
        {
          date: '17-01-22',
          isPresent: true
        },
        {
          date: '18-01-22',
          isPresent: true
        },
        {
          date: '19-01-22',
          isPresent: true
        },
        {
          date: '20-01-22',
          isPresent: true
        },
        {
          date: '21-01-22',
          isPresent: true
        },
        {
          date: '22-01-22',
          isPresent: false
        },
        {
          date: '23-01-22',
          isPresent: true
        },
        {
          date: '24-01-22',
          isPresent: false
        },
        {
          date: '25-01-22',
          isPresent: true
        },
        {
          date: '26-01-22',
          isPresent: false
        },
        {
          date: '27-01-22',
          isPresent: true
        },
        {
          date: '28-01-22',
          isPresent: true
        },
        {
          date: '29-01-22',
          isPresent: true
        },
        {
          date: '30-01-22',
          isPresent: false
        },
      ]
    },
  ]
  const [data, setData] = useState(dataset1)
  const [Exdata, setExData] = useState(null)
  useEffect( () => {
    excleDataMake()
  }, [])


  const excleDataMake=async()=>{
    let p = await DataShaperforExcele(dataset1)
    setExData(p)
  }



  


  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Attendance - HRMS Admin </title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Attendance</h3>

            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus">
              <input type="text" className="form-control floating" />
              <label className="focus-label">Employee Name</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>-</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
              <label className="focus-label">Select Month</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group form-focus select-focus">
              <select className="select floating">
                <option>-</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>
              <label className="focus-label">Select Year</label>
            </div>
          </div>
          {Exdata ?
            <div className="col-sm-6 col-md-3">
              <ExcelFile element={<button className="btn btn-success btn-block">Download Excel</button>}>
                <ExcelSheet dataSet={Exdata} name="Attendace report" />
              </ExcelFile>
            </div> : <></>}
        </div>
        {/* /Search Filter */}
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table table-nowrap mb-0">
                <thead>
                  <tr>
                    <th>Employee</th>
                    {
                      data[0].attendance.map(
                        (x, id) => <th>{id + 1}</th>
                      )
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map(x => {
                      return (
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a className="avatar avatar-xs"><img alt="" src={x.employee.img||Avatar_09} /></a>
                              <a href={`/hive_hrm/app/employees/employee-profile/${x.employee.id}`}>{x.employee.name}</a>
                            </h2>
                          </td>
                          {
                            x.attendance.map(y=>  <td><a  ><i className= {y.isPresent? "fa fa-check text-success":"fa fa-close text-danger"} /></a></td>)
                          }
                          
                          {/* <td>
                            <div className="half-day">
                              <span className="first-off"><a href="" data-toggle="modal" data-target="#attendance_info"><i className="fa fa-check text-success" /></a></span>
                              <span className="first-off"><i className="fa fa-close text-danger" /></span>
                            </div>
                          </td> */}
                         </tr>
                      )
                    })
                  }

            
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Attendance Modal */}
      <div className="modal custom-modal fade" id="attendance_info" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Attendance Info</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card punch-status">
                    <div className="card-body">
                      <h5 className="card-title">Timesheet <small className="text-muted">11 Mar 2019</small></h5>
                      <div className="punch-det">
                        <h6>Punch In at</h6>
                        <p>Wed, 11th Mar 2019 10.00 AM</p>
                      </div>
                      <div className="punch-info">
                        <div className="punch-hours">
                          <span>3.45 hrs</span>
                        </div>
                      </div>
                      <div className="punch-det">
                        <h6>Punch Out at</h6>
                        <p>Wed, 20th Feb 2019 9.00 PM</p>
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
                  <div className="card recent-activity">
                    <div className="card-body">
                      <h5 className="card-title">Activity</h5>
                      <ul className="res-activity-list">
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            10.00 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            11.00 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            11.15 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            1.30 PM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            2.00 PM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            7.30 PM.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Attendance Modal */}
    </div>
  );
}


export default Attendance_Hr;
