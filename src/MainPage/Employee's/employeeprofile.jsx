import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_02, Avatar_05, Avatar_09, Avatar_10, Avatar_16 } from '../../Entryfile/imagepath'
import { useReactOidc } from '@axa-fr/react-oidc-context';
import { useHistory, useParams } from 'react-router';
import axios from "axios";
import Skeleton from 'react-loading-skeleton';

const EmployeeProfile = () => {
  let history = useHistory();
  const { id } = useParams()
  const { oidcUser } = useReactOidc();
  const [userInfo, setUserInfo] = useState({})
  // const userInfo=oidcUser.profile

  useEffect(() => {
    ff()
    return () => { }
  }, [])

  const ff = async () => {
    let data = id ? await getEmpData() : oidcUser.profile
    setUserInfo(data)
  }


  const getEmpData = async () => {
    try {
      let res = await axios.get(`https://sso.hivecorelimited.com/users/${id}/`,
        {

          headers: {
            'Authorization': `Bearer ${oidcUser.access_token}`
          }

        })
      console.log(res.data);
      return res.data

    } catch (error) {
      console.log(error);
      history.push('/app/employees/allemployees')
    }

  }

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{`Employee Profile - Hive HRMS`}</title>
        <meta name="description" content="Reactify Blank Page" />
      </Helmet>
      {/* {console.log(employeeProfile)} */}
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">{`Profile`}</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                  <div className="profile-img-wrap">
                    <div className="profile-img">
                      <a><img alt="" style={{objectFit:"cover"}} src={userInfo.photo||Avatar_02} /></a>
                    </div>
                  </div>
                  <div className="profile-basic">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile-info-left">
                          <h3 className="user-name m-t-0 mb-0">{userInfo.first_name || <Skeleton width={200} />}</h3>
                          <h3 className="user-name m-t-0 mb-0">{userInfo.last_name || <Skeleton width={100} />}</h3>
                          <h6 className="text-muted">UI/UX Design Team [dummy]</h6>
                          <small className="text-muted">{userInfo.designation}</small>
                          <div className="staff-id">Employee ID : FT-0001[dummy]</div>
                          <div className="small doj text-muted">{userInfo.join_date ? `Date of Join : ${userInfo.join_date}` : <Skeleton width={100} />} </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <ul className="personal-info">
                          <li>
                            <div className="title">Phone:</div>
                            <div className="text"><a href="">{userInfo.phone || <Skeleton width={250} />}</a></div>
                          </li>
                          <li>
                            <div className="title">Email:</div>
                            <div className="text"><a href="">{userInfo.email || <Skeleton width={250} />}</a></div>
                          </li>
                          <li>
                            <div className="title">Birthday:</div>
                            <div className="text">{userInfo.birthday || <Skeleton width={250} />}</div>
                          </li>
                          {!id && <li>
                            <div className="title">Address:</div>
                            <div className="text">{userInfo.address || <Skeleton width={250} />}, {userInfo.postal_code}</div>
                          </li>}
                          <li>
                            <div className="title">Gender:</div>
                            <div className="text">{userInfo.gender || <Skeleton width={250} />}</div>
                          </li>
                          {userInfo.reports_to ? <li>
                            <div className="title">Reports to:</div>
                            <div className="text">
                              <div className="avatar-box">
                                <div className="avatar avatar-xs">
                                  <img src={userInfo.reports_to.photo} alt="" />
                                </div>
                              </div>
                              <a href={`/app/employees/employee-profile/${userInfo.reports_to.id}`} >
                                {userInfo.reports_to.name}
                              </a>
                            </div>
                          </li> : <li />}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* edit button */}
                  {/* <div className="pro-edit"><a data-target="#profile_info" data-toggle="modal" className="edit-icon" href="#"><i className="fa fa-pencil" /></a></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card tab-box">
          <div className="row user-tabs">
            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
              <ul className="nav nav-tabs nav-tabs-bottom">
                <li className="nav-item"><a href="#emp_profile" data-toggle="tab" className="nav-link active">Profile</a></li>
                {/* <li className="nav-item"><a href="#emp_projects" data-toggle="tab" className="nav-link">Projects</a></li>
                      <li className="nav-item"><a href="#bank_statutory" data-toggle="tab" className="nav-link">Bank &amp; Statutory <small className="text-danger">(Admin Only)</small></a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          {/* Profile Info Tab */}
          <div id="emp_profile" className="pro-overview tab-pane fade show active">
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">Personal Informations
                      {/* edit button */}
                      {/* <a href="#" className="edit-icon" data-toggle="modal" data-target="#personal_info_modal"><i className="fa fa-pencil" /></a> */}
                    </h3>
                    <ul className="personal-info">
                      {!id && userInfo.citizen_id && <li>
                        <div className="title">Citizen Id</div>
                        <div className="text">{userInfo.citizen_id || <Skeleton width={250} />}</div>
                      </li>}
                      <li>
                        <div className="title">Tel</div>
                        <div className="text"><a href="">{userInfo.phone || <Skeleton width={250} />}</a></div>
                      </li>
                      <li>
                        <div className="title">Nationality</div>
                        <div className="text">{userInfo.nationality || <Skeleton width={250} />}</div>
                      </li>
                      <li>
                        <div className="title">Religion</div>
                        <div className="text">{userInfo.nationality || <Skeleton width={250} />}</div>
                      </li>
                      <li>
                        <div className="title">Marital status</div>
                        <div className="text">{userInfo.maritial_status || <Skeleton width={250} />}</div>
                      </li>
                      {!id && <li>
                        <div className="title">No. of children</div>
                        <div className="text">{userInfo.no_of_children >= 0 ? userInfo.no_of_children : <Skeleton width={250} />}</div>
                      </li>}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card profile-box flex-fill">
                  <div className="card-body">
                    <h3 className="card-title">Emergency Contact
                      {/* edit button */}
                      {/* <a href="#" className="edit-icon" data-toggle="modal" data-target="#emergency_contact_modal"><i className="fa fa-pencil" /></a> */}
                    </h3>
                    {/* <h5 className="section-title">Primary</h5> */}
                    {!!!id ? <div>
                      {userInfo.emergency_contacts ? userInfo.emergency_contacts.length > 0 ? userInfo.emergency_contacts.map((x, idx) =>
                        <ul className="personal-info" key={`contact-${idx}`}>
                          <li>
                            <div className="title">Name</div>
                            <div className="text">{x.name}</div>
                          </li>
                          <li>
                            <div className="title">Relationship</div>
                            <div className="text">{x.relation}</div>
                          </li>
                          <li>
                            <div className="title">Phone </div>
                            <div className="text">{x.phone}</div>
                          </li>
                          <hr />
                        </ul>)
                        :
                        <ul className="personal-info" >
                          <li>
                            <div className="title">Name</div>
                            <div className="text">{userInfo.emergency_contacts.name}</div>
                          </li>
                          <li>
                            <div className="title">Relationship</div>
                            <div className="text">{userInfo.emergency_contacts.relation}</div>
                          </li>
                          <li>
                            <div className="title">Phone </div>
                            <div className="text">{userInfo.emergency_contacts.phone}</div>
                          </li>
                          <hr />
                        </ul> : <ul />
                      }
                    </div> : <ul />}
                    {/* <hr /> */}
                    {/* <h5 className="section-title">Secondary</h5> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Profile Info Tab */}
          {/* Projects Tab */}
          <div className="tab-pane fade" id="emp_projects">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown profile-action">
                      <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                    <h4 className="project-title"><a href="/blue/app/projects/projects-view">Office Management</a></h4>
                    <small className="block text-ellipsis m-b-15">
                      <span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
                      <span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
                    </small>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. When an unknown printer took a galley of type and
                      scrambled it...
                    </p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">
                        Deadline:
                      </div>
                      <div className="text-muted">
                        17 Apr 2019
                      </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Project Leader :</div>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Team :</div>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                    <div className="progress progress-xs mb-0">
                      <div style={{ width: '40%' }} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown profile-action">
                      <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                    <h4 className="project-title"><a href="/blue/app/projects/projects-view">Project Management</a></h4>
                    <small className="block text-ellipsis m-b-15">
                      <span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
                      <span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
                    </small>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. When an unknown printer took a galley of type and
                      scrambled it...
                    </p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">
                        Deadline:
                      </div>
                      <div className="text-muted">
                        17 Apr 2019
                      </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Project Leader :</div>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Team :</div>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                    <div className="progress progress-xs mb-0">
                      <div style={{ width: '40%' }} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown profile-action">
                      <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                    <h4 className="project-title"><a href="/blue/app/projects/projects-view">Video Calling App</a></h4>
                    <small className="block text-ellipsis m-b-15">
                      <span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
                      <span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
                    </small>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. When an unknown printer took a galley of type and
                      scrambled it...
                    </p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">
                        Deadline:
                      </div>
                      <div className="text-muted">
                        17 Apr 2019
                      </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Project Leader :</div>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Team :</div>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                    <div className="progress progress-xs mb-0">
                      <div style={{ width: '40%' }} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown profile-action">
                      <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                    </div>
                    <h4 className="project-title"><a href="/blue/app/projects/projects-view">Hospital Administration</a></h4>
                    <small className="block text-ellipsis m-b-15">
                      <span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
                      <span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
                    </small>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. When an unknown printer took a galley of type and
                      scrambled it...
                    </p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">
                        Deadline:
                      </div>
                      <div className="text-muted">
                        17 Apr 2019
                      </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Project Leader :</div>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="project-members m-b-15">
                      <div>Team :</div>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </div>
                    <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                    <div className="progress progress-xs mb-0">
                      <div style={{ width: '40%' }} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Projects Tab */}
          {/* Bank Statutory Tab */}
          <div className="tab-pane fade" id="bank_statutory">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title"> Basic Salary Information</h3>
                <form>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Salary basis <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Select salary basis type</option>
                          <option>Hourly</option>
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Salary amount <small className="text-muted">per month</small></label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input type="text" className="form-control" placeholder="Type your salary amount" defaultValue={0.00} />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Payment type</label>
                        <select className="select">
                          <option>Select payment type</option>
                          <option>Bank transfer</option>
                          <option>Check</option>
                          <option>Cash</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h3 className="card-title"> PF Information</h3>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">PF contribution</label>
                        <select className="select">
                          <option>Select PF contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">PF No. <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Select PF contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Employee PF rate</label>
                        <select className="select">
                          <option>Select PF contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Select additional rate</option>
                          <option>0%</option>
                          <option>1%</option>
                          <option>2%</option>
                          <option>3%</option>
                          <option>4%</option>
                          <option>5%</option>
                          <option>6%</option>
                          <option>7%</option>
                          <option>8%</option>
                          <option>9%</option>
                          <option>10%</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Total rate</label>
                        <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Employee PF rate</label>
                        <select className="select">
                          <option>Select PF contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Select additional rate</option>
                          <option>0%</option>
                          <option>1%</option>
                          <option>2%</option>
                          <option>3%</option>
                          <option>4%</option>
                          <option>5%</option>
                          <option>6%</option>
                          <option>7%</option>
                          <option>8%</option>
                          <option>9%</option>
                          <option>10%</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Total rate</label>
                        <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h3 className="card-title"> ESI Information</h3>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">ESI contribution</label>
                        <select className="select">
                          <option>Select ESI contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">ESI No. <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Select ESI contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Employee ESI rate</label>
                        <select className="select">
                          <option>Select ESI contribution</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                        <select className="select">
                          <option>Select additional rate</option>
                          <option>0%</option>
                          <option>1%</option>
                          <option>2%</option>
                          <option>3%</option>
                          <option>4%</option>
                          <option>5%</option>
                          <option>6%</option>
                          <option>7%</option>
                          <option>8%</option>
                          <option>9%</option>
                          <option>10%</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="col-form-label">Total rate</label>
                        <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button className="btn btn-primary submit-btn" type="submit">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Bank Statutory Tab */}
        </div>
      </div>
      {/* /Page Content */}
      {/* Profile Modal */}
      <div id="profile_info" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Profile Information</h5>
              <button type="button" className="close" data_dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-img-wrap edit-img">
                      <img className="inline-block" src={Avatar_02} alt="user" />
                      <div className="fileupload btn">
                        <span className="btn-text">edit</span>
                        <input className="upload" type="file" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" className="form-control" defaultValue="John" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" className="form-control" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Birth Date</label>
                          <div className="cal-icon">
                            <input className="form-control datetimepicker" type="text" defaultValue="05/06/1985" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <select className="select form-control">
                            <option value="male selected">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" className="form-control" defaultValue="4487 Snowbird Lane" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>State</label>
                      <input type="text" className="form-control" defaultValue="New York" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" className="form-control" defaultValue="United States" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Pin Code</label>
                      <input type="text" className="form-control" defaultValue={10523} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="text" className="form-control" defaultValue="631-889-3206" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department <span className="text-danger">*</span></label>
                      <select className="select">
                        <option>Select Department</option>
                        <option>Web Development</option>
                        <option>IT Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Designation <span className="text-danger">*</span></label>
                      <select className="select">
                        <option>Select Designation</option>
                        <option>Web Designer</option>
                        <option>Web Developer</option>
                        <option>Android Developer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Reports To <span className="text-danger">*</span></label>
                      <select className="select">
                        <option>-</option>
                        <option>Wilmer Deluna</option>
                        <option>Lesley Grauer</option>
                        <option>Jeffery Lalor</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Profile Modal */}
      {/* Personal Info Modal */}
      <div id="personal_info_modal" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Personal Information</h5>
              <button type="button" className="close" data_dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Passport No</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Passport Expiry Date</label>
                      <div className="cal-icon">
                        <input className="form-control datetimepicker" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tel</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Nationality <span className="text-danger">*</span></label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Religion</label>
                      <div className="cal-icon">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Marital status <span className="text-danger">*</span></label>
                      <select className="select form-control">
                        <option>-</option>
                        <option>Single</option>
                        <option>Married</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Employment of spouse</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No. of children </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Personal Info Modal */}
      {/* Family Info Modal */}
      <div id="family_info_modal" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Family Informations</h5>
              <button type="button" className="close" data_dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-scroll">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Family Member <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Name <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Relationship <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Date of birth <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Education Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Name <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Relationship <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Date of birth <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="add-more">
                        <a href=""><i className="fa fa-plus-circle" /> Add More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Family Info Modal */}
      {/* Emergency Contact Modal */}
      <div id="emergency_contact_modal" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Personal Information</h5>
              <button type="button" className="close" data_dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Primary Contact</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Relationship <span className="text-danger">*</span></label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone <span className="text-danger">*</span></label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone 2</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Primary Contact</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Relationship <span className="text-danger">*</span></label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone <span className="text-danger">*</span></label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone 2</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Emergency Contact Modal */}
      {/* Education Modal */}
      <div id="education_info" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Education Informations</h5>
              <button type="button" className="close" data_dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-scroll">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Education Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input type="text" defaultValue="Oxford University" className="form-control floating" />
                            <label className="focus-label">Institution</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input type="text" defaultValue="Computer Science" className="form-control floating" />
                            <label className="focus-label">Subject</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <div className="cal-icon">
                              <input type="text" defaultValue="01/06/2002" className="form-control floating datetimepicker" />
                            </div>
                            <label className="focus-label">Starting Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <div className="cal-icon">
                              <input type="text" defaultValue="31/05/2006" className="form-control floating datetimepicker" />
                            </div>
                            <label className="focus-label">Complete Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input type="text" defaultValue="BE Computer Science" className="form-control floating" />
                            <label className="focus-label">Degree</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input type="text" defaultValue="Grade A" className="form-control floating" />
                            <label className="focus-label">Grade</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Education Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input type="text" defaultValue="Oxford University" className="form-control floating" />
                            <label className="focus-label">Institution</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input type="text" defaultValue="Computer Science" className="form-control floating" />
                            <label className="focus-label">Subject</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <div className="cal-icon">
                              <input type="text" defaultValue="01/06/2002" className="form-control floating datetimepicker" />
                            </div>
                            <label className="focus-label">Starting Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <div className="cal-icon">
                              <input type="text" defaultValue="31/05/2006" className="form-control floating datetimepicker" />
                            </div>
                            <label className="focus-label">Complete Date</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input type="text" defaultValue="BE Computer Science" className="form-control floating" />
                            <label className="focus-label">Degree</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus focused">
                            <input type="text" defaultValue="Grade A" className="form-control floating" />
                            <label className="focus-label">Grade</label>
                          </div>
                        </div>
                      </div>
                      <div className="add-more">
                        <a href=""><i className="fa fa-plus-circle" /> Add More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Education Modal */}
      {/* Experience Modal */}
      <div id="experience_info" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Experience Informations</h5>
              <button type="button" className="close" data_dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-scroll">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Experience Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" defaultValue="Digital Devlopment Inc" />
                            <label className="focus-label">Company Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" defaultValue="United States" />
                            <label className="focus-label">Location</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" defaultValue="Web Developer" />
                            <label className="focus-label">Job Position</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <div className="cal-icon">
                              <input type="text" className="form-control floating datetimepicker" defaultValue="01/07/2007" />
                            </div>
                            <label className="focus-label">Period From</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <div className="cal-icon">
                              <input type="text" className="form-control floating datetimepicker" defaultValue="08/06/2018" />
                            </div>
                            <label className="focus-label">Period To</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Experience Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" defaultValue="Digital Devlopment Inc" />
                            <label className="focus-label">Company Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" defaultValue="United States" />
                            <label className="focus-label">Location</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" defaultValue="Web Developer" />
                            <label className="focus-label">Job Position</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <div className="cal-icon">
                              <input type="text" className="form-control floating datetimepicker" defaultValue="01/07/2007" />
                            </div>
                            <label className="focus-label">Period From</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <div className="cal-icon">
                              <input type="text" className="form-control floating datetimepicker" defaultValue="08/06/2018" />
                            </div>
                            <label className="focus-label">Period To</label>
                          </div>
                        </div>
                      </div>
                      <div className="add-more">
                        <a href=""><i className="fa fa-plus-circle" /> Add More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Experience Modal */}
    </div>

  );

}

export default EmployeeProfile