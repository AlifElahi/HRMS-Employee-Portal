/**
 * Signin Firebase
 */

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import Select from "react-select";
import { useForm } from "react-hook-form";

const Designation = () => {

  const { register, handleSubmit,formState: { errors }, } = useForm();
  const onSubmit = (data) => console.log(data);

  const [data, setData] = useState([
    {
      id: 1,
      designation_name: "Trainee Software Engineer",
      department: "IT",
    },
    {
      id: 2,
      designation_name: "Senior Software Engineer",
      department: "IT",
    },
    {
      id: 3,
      designation_name: "Software Engineer",
      department: "IT",
    },
  ]);
  const emplist = [
    { value: "mr.x", label: "mr.x" },
    { value: "mr.y", label: "mr.y" },
    { value: "mr.z", label: "mr.z" },
    { value: "mr.k", label: "mr.k" },
  ];
  const departments = [
    { value: "HR", label: "HR" },
    { value: "IT", label: "IT" },
    { value: "Admin", label: "Admin" },
  ];
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
    }),
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Designation",
      dataIndex: "designation_name",
    },
    {
      title: "Department",
      dataIndex: "department",
    },

    {
      title: "Action",
      render: (text, record) => (
        <div className="dropdown dropdown-action text-right">
          <a
            href="#"
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
              data-target="#edit_leavetype"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </a>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#delete_leavetype"
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
        <title>Designations - Hive HRMS</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Designations</h3>
            </div>
            <div className="col-auto float-right ml-auto">
              <a
                href="#"
                className="btn add-btn"
                data-toggle="modal"
                data-target="#add_leavetype"
              >
                <i className="fa fa-plus" /> Add Designation
              </a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
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
                bordered
                dataSource={data}
                rowKey={(record) => record.id}
              />
              {/* <table className="table table-striped custom-table datatable mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Leave Type</th>
                        <th>Leave Days</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>Casual Leave</td>
                        <td>12 Days</td>
                        <td>
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-success" /> Active
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#" className="dropdown-item"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                              <a href="#" className="dropdown-item"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leavetype"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_leavetype"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          2
                        </td>
                        <td>Medical Leave</td>
                        <td>12 Days</td>
                        <td>
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-danger" /> Inactive
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leavetype"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_leavetype"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          3
                        </td>
                        <td>Loss of Pay</td>
                        <td>-</td>
                        <td>
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-success" /> Active
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leavetype"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_leavetype"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Leavetype Modal */}
      <div id="add_leavetype" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Designation</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>
                    Designation <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" {...register("designation_name", { required: true})} />
                  {errors.designation_name?.type === 'required' && "Designation is required"}
                </div>

                <div className="form-group">
                  <label>
                    Department <span className="text-danger">*</span>
                  </label>
                  <Select
                    classNamePrefix="select"
                    styles={customStyles}
                    value={departments[0]}
                    options={departments}
                  />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Leavetype Modal */}
      {/* Edit Leavetype Modal */}
      <div
        id="edit_leavetype"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Designation</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    Designation <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>

                <div className="form-group">
                  <label>
                    Department <span className="text-danger">*</span>
                  </label>
                  <Select
                    classNamePrefix="select"
                    styles={customStyles}
                    value={departments[0]}
                    options={departments}
                  />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Leavetype Modal */}
      {/* Delete Leavetype Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_leavetype"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Leave Type</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a href="" className="btn btn-primary continue-btn">
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href=""
                      data-dismiss="modal"
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
      {/* /Delete Leavetype Modal */}
    </div>
  );
};

export default Designation;
