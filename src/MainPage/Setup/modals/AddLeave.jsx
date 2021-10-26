import React from "react";
import { useForm, Controller } from "react-hook-form";

export const AddLeave = ({ submitFunction }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    submitFunction(data);
  };
  return (
    <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave Type</h5>
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>
                    Leave Type <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-group">
                  <label>
                    Number of days <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("count", { required: true })}
                  />
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
  );
};
