
import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_09 } from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../paginationfunction"
import "../antdstyle.css"
import { Tooltip } from 'antd';
import { DatePicker } from 'antd';

const Leaves = (props) => {

  const leavetypeOption = [
    { value: 'Casual', label: 'Casual' },
    { value: 'Casual1', label: 'Casual1' },
    { value: 'Casual2', label: 'Casual2' },
    { value: 'Casual3', label: 'Casual3' },

  ]
  const [leaveTypes, setLeaveTypes] = useState(leavetypeOption)
  // const [leaveTypes,setLeaveTypes]=useState(leavetypeOption)


  const [data, setData] = useState([
    {
      id: 1,
      image: Avatar_09,
      name: "Richard Miles",
      leavetype: "Casual Leave",
      from: "8 Mar 2019",
      to: "9 Mar 2019",
      noofdays: "2 days",
      reason: "Going to Hospital",
      status: "Pending",
    },
    {
      id: 2,
      image: Avatar_09,
      name: "Richard Miles",
      leavetype: "Casual Leave",
      from: "30 Jan 2019",
      to: "30 Jan 2019",
      noofdays: "Second Half",
      reason: "Going to Hospital",
      status: "Pending",
    },
    {
      id: 3,
      image: Avatar_09,
      name: "Richard Miles",
      leavetype: "Casual Leave",
      from: "13 Jan 2019",
      to: "14 Jan 2019",
      noofdays: "2 days",
      reason: "Going to Hospital",
      status: "Approved",
    },
    {
      id: 4,
      image: Avatar_09,
      name: "Richard Miles",
      leavetype: "Casual Leave",
      from: "10 Jan 2019",
      to: "10 Jan 2019",
      noofdays: "First Half",
      reason: "Going to Hospital",
      status: "Declined",
    },
    {
      id: 5,
      image: Avatar_09,
      name: "Richard Miles",
      leavetype: "Hospitalisation",
      from: "15 Jan 2019",
      to: "25 Jan 2019",
      noofdays: "10 days",
      reason: "Going to Hospital for my kanna kati",
      status: "Approved",
    },
    {
      id: 6,
      image: Avatar_09,
      name: "Richard Miles",
      leavetype: "LOP",
      from: "24 Feb 2019",
      to: "25 Feb 2019",
      noofdays: "2 days",
      reason: "Personnal",
      status: "Approved",
    },
    {
      id: 7,
      image: Avatar_09,
      name: "Richard Miles",
      leavetype: "Medical Leave",
      from: "27 Feb 2019",
      to: "27 Feb 2019",
      noofdays: "1 days",
      reason: "Going to Hospital",
      status: "Approved",
    },
    {
      id: 8,
      image: Avatar_09,
      name: "Richard Miles",
      leavetype: "Paternity Leave",
      from: "13 Feb 2019",
      to: "17 Feb 2019",
      noofdays: "5 days",
      reason: "Going to Hospital",
      status: "Declined",
    },
  ])

  const sayHello = () => {
    // console.log(this.state.data.length)
    console.log(this.state.data.filter(x =>
      x.leavetype == 'Casual Leave'))
    // console.log(this.state.data);
  }



  const columns = [
    {
      title: "Leave Type",
      dataIndex: "leavetype",
    },

    {
      title: "From",
      dataIndex: "from",
    },
    {
      title: "To",
      dataIndex: "to",
    },

    {
      title: "No Of Days",
      dataIndex: "noofdays",
    },

    {
      title: "Reason",
      dataIndex: "reason",
      render: (text, record) => (
        <Tooltip title={text}>
          <div style={{
            maxWidth: '150px',
            whiteSpace: "nowrap",
            overflow: 'hidden',
            textOverflow: "ellipsis"
          }}>
            {text}
          </div>
        </Tooltip>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <div className="action-label text-center">
          <a className="btn btn-white btn-sm btn-rounded">
            <i
              className={
                text === "Pending"
                  ? "fa fa-dot-circle-o text-info"
                  : text === "Approved"
                    ? "fa fa-dot-circle-o text-success"
                    : "fa fa-dot-circle-o text-danger"
              }
            />{" "}
            {text}
          </a>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Authority Body",
      dataIndex: "name",
      render: (text, record) => (
        <h2 className="table-avatar">
          <a className="avatar">
            <img alt="" src={record.image} />
          </a>
          <a>{text} </a>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="dropdown dropdown-action text-right">
          <a
            className="action-icon dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a
              className="dropdown-item"
              data-toggle="modal"
              data-target="#edit_leave"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </a>
            <a
              className="dropdown-item"
              data-toggle="modal"
              data-target="#delete_approve"
            >
              <i className="fa fa-trash-o m-r-5" /> Delete
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Leaves - Hive HRMS</title>
        <meta name="Leave" content="EmplyeeLeave" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Leaves</h3>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_leave"
              >
                <i className="fa fa-plus" /> Add Leave
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Leave Statistics */}

        <div className="row">
          <div className="col-md-3"
            onClick={sayHello}>
            <div className="stats-info">
              <h6>Annual Leave</h6>
              <h4>{data.length}</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stats-info">
              <h6>Medical Leave</h6>
              <h4>3</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stats-info">
              <h6>Other Leave</h6>
              <h4>4</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stats-info">
              <h6>Remaining Leave</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>
        {/* /Leave Statistics */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                pagination={{
                  total: data.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Leave Modal */}
      <div id="add_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave</h5>
              <button
                type="button"
                className="close"
                data_dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                    <option>Medical Leave</option>
                    <option>Loss of Pay</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    From <span className="text-danger">*</span>
                  </label>
                  <DatePicker className="form-control datetimepicker" />
                </div>
                <div className="form-group">
                  <label>
                    To <span className="text-danger">*</span>
                  </label>
                  <DatePicker className="form-control datetimepicker" />
                </div>
                <div className="form-group">
                  <label>
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" readOnly type="text" />
                </div>
                <div className="form-group">
                  <label>
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    defaultValue={12}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Leave Reason <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Leave Modal */}
      {/* Edit Leave Modal */}
      <div id="edit_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Leave</h5>
              <button
                type="button"
                className="close"
                data_dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    From <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      defaultValue="01-01-2019"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    To <span className="text-danger">*</span>
                  </label>
                  <div className="cal-icon">
                    <input
                      className="form-control datetimepicker"
                      defaultValue="01-01-2019"
                      type="text"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    defaultValue={2}
                  />
                </div>
                <div className="form-group">
                  <label>
                    Remaining Leaves <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    readOnly
                    defaultValue={12}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Leave Reason <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="form-control"
                    defaultValue={"Going to hospital"}
                  />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Leave Modal */}
      {/* Delete Leave Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_approve"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Leave</h3>
                <p>Are you sure want to Cancel this leave?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a className="btn btn-primary continue-btn">
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      data_dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Leave Modal */}
    </div>
  );
}


export default Leaves;
