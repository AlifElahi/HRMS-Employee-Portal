import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

export const AddShift = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

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
              <label className="col-form-label">No of working days/week</label>

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
                      value={weekendoptions.find((c) => c.value === value)}
                      onChange={(val) => onChange(val.value)}
                    />
                  );
                }}
              />
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
  );
};
