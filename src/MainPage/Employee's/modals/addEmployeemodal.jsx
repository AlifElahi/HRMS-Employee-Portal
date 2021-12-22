import React, { useRef, useState } from 'react'
import { Avatar_02 } from '../../../Entryfile/imagepath'

const AddEmployeemodal = () => {
  const [image, setImage] = useState();

  return (

    <form>
      <div className="row">

        <div className="col-sm-12">
          <div className="form-group" >
            <div className="profile-img-wrap edit-img">
              <img className="inline-block" src={image ? URL.createObjectURL(image) : Avatar_02} alt="user" />
              <div className="fileupload btn">
                <span className="btn-text">upload</span>
                <input className="upload" type="file" accept="image/png, image/jpeg" onChange={(e) => {
                  setImage(e.target.files[0])
                }} />
              </div>
            </div>
          </div>
        </div>


        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-form-label">First Name <span className="text-danger">*</span></label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-form-label">Last Name</label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-form-label">Email <span className="text-danger">*</span></label>
            <input className="form-control" type="email" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-form-label">Password</label>
            <input className="form-control" type="password" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-form-label">Confirm Password</label>
            <input className="form-control" type="password" />
          </div>
        </div>
      
        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
            <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="col-form-label">Phone </label>
            <input className="form-control" type="text" />
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
      </div>
      <div className="table-responsive m-t-15">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th>Role</th>
              <th className="text-center">Permission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td className="text-center">
                <input  type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>Hr</td>
              <td className="text-center">
                <input  type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>User</td>
              <td className="text-center">
                <input defaultChecked type="checkbox" />
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <div className="submit-section">
        <button className="btn btn-primary submit-btn">Submit</button>
      </div>
    </form>

  )
}

export default AddEmployeemodal
