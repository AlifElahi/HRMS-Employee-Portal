import axios from "axios";
import { monthSpecifictiemSheetdataFormater } from "./Helper";


export const getPunchcardInfo = async (token) => {


    try {
        let res = await axios.get('https://timesheet.hivecorelimited.com/attendance/timesheetstatus/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
        console.log(res);
        return res.data
    } catch (error) {
        console.log(error);
        return error
    }

}
export const punchTimeLog = async (type, token) => {
    let url = type === 'in' ? '/attendance/punchin/' : type === 'out' ? '/attendance/punchout/' : ''
    if (url == '') return
    try {
        let res = await axios.post(`https://timesheet.hivecorelimited.com${url}`, {},
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
        return res.data
    } catch (error) {
        return error

    }

}
export const getMothSpecificUserTimeSheet = async (month, year, token) => {

    try {
        let res = await axios.get(`https://timesheet.hivecorelimited.com/attendance/timesheets/`,
            {
                params: {
                    month,
                    year
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            console.log(res.data);
        let dataArr = await monthSpecifictiemSheetdataFormater(res.data)

        return dataArr
    } catch (error) {
       


        return error

    }

}
