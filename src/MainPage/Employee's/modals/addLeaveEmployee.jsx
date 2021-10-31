import React, { useState, useEffect } from "react";

import { DatePicker } from "antd";
import "../../antdstyle.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const AddLeaveEmployee = ({ submitFunction, leaveTypes }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => submitFunction(data) ;
  const [startDay, setStart] = useState();
  const [endDay, setEnd] = useState();
  useEffect(() => {
    register("from", {
      required: true,
    });
    register("to", {
      required: true,
    });
    setValue("noofdays", '');
    setValue("from", '');
    setValue("to",'');
    setStart(null)
    setEnd(null)
    setValue("reason",'');
  }, []);

  useEffect(() => {
    if (startDay && endDay) {
        let b = endDay.diff(startDay, "days") + 1;

      setValue("noofdays", b);
    }else
    setValue("noofdays", 0);
  }, [startDay, endDay]);
  return (
    
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>
                Leave Type <span className="text-danger">*</span>
              </label>
              <Controller
                control={control}
                name="leaveTypes"
                rules={{ required: true }}
                render={({ field: { onChange, value, name, ref } }) => {
                  return (
                    <Select
                      classNamePrefix="select"
                      options={leaveTypes}
                      value={leaveTypes.find((c) => c.value === value)}
                      onChange={(val) => onChange(val.value)}
                    />
                  );
                }}
              />
            </div>
            <div className="form-group">
              <label>
                From <span className="text-danger">*</span>
              </label>
              <DatePicker
                className="form-control datetimepicker"
                onChange={(e) => {
                  setStart(e);
                  if (e) setValue("from", e.format("YYYY-MM-DD"));
                  else setValue("from", null);
                }}
              />
            </div>
            <div className="form-group">
              <label>
                To <span className="text-danger">*</span>
              </label>
              <DatePicker
                className="form-control datetimepicker"
                onChange={(e) => {
                  setEnd(e);
                  if (e) setValue("to", e.format("YYYY-MM-DD"));
                  else setValue("to", null);
                }}
              />
            </div>
            <div className="form-group">
              <label>
                Number of days <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                readOnly
                type="text"
                {...register("noofdays", { required: true })}
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
                defaultValue={""}
                {...register("reason", { required: true })}
              />
            </div>
            <div className="submit-section">
              <button className="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
       
  );
};

export default AddLeaveEmployee;