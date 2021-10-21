import React, { Component, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

// class ShiftList extends Component {
const ShiftList = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
    }),
  };

  const openEdit = (x) => {
    setValue("shift_name", x.shift_name);
    setValue("start_time", x.start_time);
    setValue("end_time", x.end_time);
    setValue("buffer_time", x.buffer_time);
    setValue("noofworkingdays", x.noofworkingdays);
    setItemId(x.id);
  };
  const closeEdit = () => {
    setValue("shift_name", x.shift_name);
    setValue("start_time", x.start_time);
    setValue("end_time", x.end_time);
    setValue("buffer_time", x.buffer_time);
    setValue("noofworkingdays", x.noofworkingdays);
    setItemId("");
  };
  const openDelate = (x) => {
    setItemId(x.id);
  };
  const closeDelete = () => {
    setItemId("");
  };

  const weekoptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
  ];
  const weekendoptions = [
    { value: "sun", label: "sun" },
    { value: "mon", label: "mon" },
    { value: "tue", label: "tue" },
    { value: "wed", label: "wed" },
    { value: "thu", label: "thu" },
    { value: "fri", label: "fri" },
  ];
  const [data, setData] = useState([
    {
      id: 1,
      shift_name: "10'o clock Shift",
      start_time: "10:00:00 am",
      end_time: "07:00:00 pm",
      buffer_time: "30",
      status: "Active",
      workDays: 5,
      starts: 0,
    },
    {
      id: 2,
      shift_name: "12'o clock Shift",
      start_time: "12:00:00 pm",
      end_time: "09:00:00 pm",
      buffer_time: "30",
      status: "Active",
      workDays: 5,
      starts: 1,
    },
    {
      id: 3,
      shift_name: "5'o clock Shift",
      start_time: "05:00:00 pm",
      end_time: "10:00:00 pm",
      buffer_time: "30",
      status: "Active",
      workDays: 5,
      starts: 2,
    },
  ]);

  const [noWeekWorkingdays, setworkdays] = useState(weekoptions[0]);
  const [weekStartDay, setStartDay] = useState(weekendoptions[0]);

  const handleChangeWorkingweek = (e) => {
    setworkdays(e);
  };

  const handleChangeWeekstart = (e) => {
    setStartDay(e);
  };

  const formadd = useRef();

  const addFunc = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target.noday.value);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Shift Name",
      dataIndex: "shift_name",
    },

    {
      title: "Start Time",
      dataIndex: "start_time",
    },
    {
      title: "End Time",
      dataIndex: "end_time",
    },
    {
      title: "Buffer Time",
      dataIndex: "buffer_time",
    },
    {
      title: "Status",
      render: (text, record) => (
        <div className="action-label">
          <a
            className="btn btn-white btn-sm btn-rounded"
            href="javascript:void(0);"
          >
            <i className="fa fa-dot-circle-o text-success" /> Active
          </a>
        </div>
      ),
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="dropdown dropdown-action">
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
              data-target="#edit_shift"
              onClick={() => openEdit(record)}
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </a>
            <a
              className="dropdown-item"
              data-toggle="modal"
              data-target="#delete_employee"
            >
              <i className="fa fa-trash-o m-r-5" /> Delete
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <Helmet>
          <title>Shift List - Hive HRMS</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Shift List</h3>
              </div>
              <div className="col-auto float-right ml-auto">
                <a
                  className="btn add-btn m-r-5"
                  data-toggle="modal"
                  data-target="#add_shift"
                >
                  Add Shifts
                </a>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Content Starts */}
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
                  // bordered
                  dataSource={data}
                  rowKey={(record) => record.id}
                  // onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
          {/* /Content End */}
        </div>
        {/* /Page Content */}
      </div>
      {/* /Page Wrapper */}
      {/* Add Shift Modal */}
      <div id="add_shift" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Shift</h5>
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
              {/* form  */}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label className="col-form-label">
                        Shift Name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time timepicker">
                        {/* <input className="form-control" /> */}
                        <input
                          className="form-control"
                          type="text"
                          {...register("shift_name", { required: true })}
                        />
                        <span className="input-group-append input-group-addon"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time timepicker">
                        <input
                          className="form-control"
                          type="time"
                          {...register("start_time", { required: true })}
                        />
                        {/* <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time timepicker">
                        <input
                          className="form-control"
                          type="time"
                          {...register("end_time", { required: true })}
                        />
                        {/* <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Buffer (In Minutes) </label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("buffer_time", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        No of working days/week
                      </label>
                      {/* <Select
                        classNamePrefix="select"
                        styles={customStyles}
                        value={noWeekWorkingdays}
                        onChange={handleChangeWorkingweek}
                        options={weekoptions}
                      /> */}
                      <Controller
                        control={control}
                        name="noofworkingdays"
                        rules={{ required: true }}
                        render={({ field: { onChange, value, name, ref } }) => {
                          return (
                            <Select
                              inputRef={ref}
                              classNamePrefix="select"
                              options={weekoptions}
                              value={weekoptions.find((c) => c.value === value)}
                              onChange={(val) => onChange(val.value)}
                            />
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Week starts from</label>
                      {/* <Select
                        classNamePrefix="select"
                        styles={customStyles}
                        value={weekStartDay}
                        onChange={handleChangeWeekstart}
                        options={weekendoptions}
                      /> */}
                      <Controller
                        control={control}
                        name="weeksstartfrom"
                        rules={{ required: true }}
                        render={({ field: { onChange, value, name, ref } }) => {
                          return (
                            <Select
                              inputRef={ref}
                              classNamePrefix="select"
                              options={weekendoptions}
                              value={weekendoptions.find(
                                (c) => c.value === value
                              )}
                              onChange={(val) => onChange(val.value)}
                            />
                          );
                        }}
                      />
                      {/* <Select
                        inputRef={ref}
                        classNamePrefix="select"
                        options={emplist}
                        value={emplist.find((c) => c.value === value)}
                        onChange={(val) => onChange(val.value)}
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Shift Modal */}
      {/* Edit Shift Modal */}
      <div id="edit_shift" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Shift</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => closeEdit()}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label className="col-form-label">
                        Shift Name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time timepicker">
                        {/* <input className="form-control" /> */}
                        <input
                          className="form-control"
                          type="text"
                          {...register("shift_name", { required: true })}
                        />
                        <span className="input-group-append input-group-addon"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time timepicker">
                        <input
                          className="form-control"
                          type="time"
                          {...register("start_time", { required: true })}
                        />
                        {/* <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        End Time <span className="text-danger">*</span>
                      </label>
                      <div className="input-group time timepicker">
                        <input
                          className="form-control"
                          type="time"
                          {...register("end_time", { required: true })}
                        />
                        {/* <input className="form-control" /><span className="input-group-append input-group-addon"><span className="input-group-text"><i className="fa fa-clock-o" /></span></span> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Buffer (In Minutes) </label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("buffer_time", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        No of working days/week
                      </label>
                      {/* <Select
                        classNamePrefix="select"
                        styles={customStyles}
                        value={noWeekWorkingdays}
                        onChange={handleChangeWorkingweek}
                        options={weekoptions}
                      /> */}
                      <Controller
                        control={control}
                        name="noofworkingdays"
                        rules={{ required: true }}
                        render={({ field: { onChange, value, name, ref } }) => {
                          return (
                            <Select
                              inputRef={ref}
                              classNamePrefix="select"
                              options={weekoptions}
                              value={weekoptions.find((c) => c.value === value)}
                              onChange={(val) => onChange(val.value)}
                            />
                          );
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Week starts from</label>
                      {/* <Select
                        classNamePrefix="select"
                        styles={customStyles}
                        value={weekStartDay}
                        onChange={handleChangeWeekstart}
                        options={weekendoptions}
                      /> */}
                      <Controller
                        control={control}
                        name="weeksstartfrom"
                        rules={{ required: true }}
                        render={({ field: { onChange, value, name, ref } }) => {
                          return (
                            <Select
                              inputRef={ref}
                              classNamePrefix="select"
                              options={weekendoptions}
                              value={weekendoptions.find(
                                (c) => c.value === value
                              )}
                              onChange={(val) => onChange(val.value)}
                            />
                          );
                        }}
                      />
                      {/* <Select
                        inputRef={ref}
                        classNamePrefix="select"
                        options={emplist}
                        value={emplist.find((c) => c.value === value)}
                        onChange={(val) => onChange(val.value)}
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Shift Modal */}
      {/* Add Schedule Modal */}
      {/* /Add Schedule Modal */}
      {/* Delete Shift Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_employee"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Shift</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-primary continue-btn"
                    >
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
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
      {/* /Delete Employee Modal */}
    </>
  );
};
// }

export default ShiftList;
