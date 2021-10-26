import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

export const AddShift = ({submitFunc}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => submitFunc(data);

  const weekoptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
  ];
  const weekstartoption = [
    { value: 0, label: "sun" },
    { value: 1, label: "mon" },
    { value: 2, label: "tue" },
    { value: 3, label: "wed" },
    { value: 4, label: "thu" },
    { value: 5, label: "fri" },
  ];

  return (
    <div>
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
                          {...register("name", { required: true })}
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
                          {...register("from_time", { required: true })}
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
                          {...register("to_time", { required: true })}
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
                        name="work_days"
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
                        options={weekstartoption}
                      /> */}
                      <Controller
                        control={control}
                        name="day_of_the_week"
                        rules={{ required: true }}
                        render={({ field: { onChange, value, name, ref } }) => {
                          return (
                            <Select
                              inputRef={ref}
                              classNamePrefix="select"
                              options={weekstartoption}
                              value={weekstartoption.find(
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
                  {/* <div className="col-sm-4">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck4" {...register('is_default')} />
                      <label className="custom-control-label" htmlFor="customCheck4">Is Default</label>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck5" {...register('is_active')} />
                      <label className="custom-control-label" htmlFor="customCheck5">Is Active</label>
                    </div>
                  </div>*/}
                </div> 
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
    </div>
  );
};
