import axios from "axios";


//to fetch the UR from backend this file is made

//to get the punchCard info
export const getPunchcardInfo1 = async (token) => {
    try {
        let res = await axios.get('https://timesheet.hivecorelimited.com/attendance/timesheetstatus/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`  // headers is set for authorization
                }

            })
        return res.data
    } catch (error) {
        return { error }
    }

}

// to get the holidays data
export const getHolidayData = async (token, year) => {
    try {
        let res = await axios.get(`https://timesheet.hivecorelimited.com/holiday/`, {
            params: {
                year: year      // param for get years
            }
            ,
            headers: {
                'Authorization': `Bearer ${token}`    // headers is set for authorization
            }

        });

        return res.data
    } catch (error) {
        return { error }
    }
}

// to post data for holidays
export const addHolidayData = async (token, data) => {
    let body = {
        items: data
    }
    try {
        let res = await axios.post(`https://timesheet.hivecorelimited.com/holiday/`, body, {
            headers: {
                'Authorization': `Bearer ${token}`  // headers is set for authorization
            }

        });

        return res.data
    } catch (error) {
        return { error }
    }
}

// for put(update) the existing holidays using data id
export const updateHolidayData = async (token, data) => {
    try {

        let res = await axios.put(`https://timesheet.hivecorelimited.com/holiday/${data.id}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`  // headers is set for authorization
            }

        });

        return res.data
    } catch (error) {
        return { error }
    }
}


// to delete the holidays using data id
export const deleteHolidayData = async (token, data) => {
    try {

        let res = await axios.delete(`https://timesheet.hivecorelimited.com/holiday/${data.id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }

        });
        return res
    } catch (error) {
        return { error }
    }
}

// to get the leaves data
export const getLeaveData = async (token) => {
    try {
      let res = await axios.get(`https://timesheet.hivecorelimited.com/leave/leavetypes/`, {

        headers: {
          'Authorization': `Bearer ${token}`
        }

      });

      return res.data
    } catch (error) {
      return {error}
    }
  }

  // to post the leave Type
  export const addLeaveTypeData = async (token, data) => {
    try {
      let res = await axios.post(`https://timesheet.hivecorelimited.com/leave/leavetypes/`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }

      });

      return res.data
    } catch (error) {
      return {error}
    }
  }

  //to put (update) the leave type data
  export const updateLeaveTypeData = async (token, data) => {
    try {

      let res = await axios.put(`https://timesheet.hivecorelimited.com/leave/leavetypes/${data.id}/`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }

      });

      return res.data
    } catch (error) {
      return {error}
    }
  }

  // delete the leave type data
  export const deleteLeaveTypeData = async (token, data) => {
    try {

      let res = await axios.delete(`https://timesheet.hivecorelimited.com/leave/leavetypes/${data.id}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }

      });
      return res
    } catch (error) {
      return {error}
    }
  }

// get shift data
  export const getShiftData = async (token) => {
    try {
      let res = await axios.get(`https://timesheet.hivecorelimited.com/attendance/admin/shifts/`, {

        headers: {
          'Authorization': `Bearer ${token}`
        }

      });

      return res.data
    } catch (error) {
      return {error}
    }
  }

  // post shift data
  export const addShiftData = async (token, data) => {
    try {
      let res = await axios.post(`https://timesheet.hivecorelimited.com/attendance/admin/shifts/`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }

      });

      return res.data
    } catch (error) {
      return {error}
    }
  }

  // put shift data
  export const updateShiftData = async (token, data) => {
    try {

      let res = await axios.put(`https://timesheet.hivecorelimited.com/attendance/admin/shifts/${data.id}/`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }

      });

      return res.data
    } catch (error) {
      return {error}
    }
  }

  //delete shift data
  export const deleteShiftData = async (token, data) => {
    try {

      let res = await axios.delete(`https://timesheet.hivecorelimited.com/attendance/admin/shifts/${data.id}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }

      });
      return res
    } catch (error) {
      return {error}
    }
  }