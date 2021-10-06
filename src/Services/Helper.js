

import dateFormat from "dateformat";


export const monthSpecifictiemSheetdataFormater = async (data) => {
    const objmaker=(x,idx)=>{
        let dd = `${x.date}T${x.check_in[0].time}`
        let dw = x.check_out.length?`${x.date}T${x.check_out[x.check_out.length - 1].time}`:""
        let datedd = new Date(dd)
        let dateww = dw!==""?new Date(dw):new Date()
        let pi = dateFormat(datedd, "h:MM TT");
        let po = dateFormat(dateww, "h:MM TT");
        const hours = parseInt(Math.abs(dateww - datedd) / (1000 * 60 * 60) % 24);
        const minutes = parseInt(Math.abs(dateww.getTime() - datedd.getTime()) / (1000 * 60) % 60);
        let prod = `${hours}:${minutes} hrs`
        let p = {
            sl: idx,
            date: x.date,
            punch_in: pi,
            punch_out: po,
            production: prod
        }
        return p
    }
    return new Array(data.length).fill(null).map((y, idx) => objmaker(data[idx],idx) )

}

export const userInfo={
    sub: "admin@hivecorelimited.com",
    first_name: "Super",
    last_name: "Administrator",
    permissions: [],
    email: "admin@hivecorelimited.com",
    alternate_email: "nooraldinahmed@gmail.com",
    phone: "01717229479",
    designation: "Super UMS Admin",
    birthday: "2021-09-28",
    gender: "male",
    nationality: "Bangladesh",
    citizen_id: "N/A",
    religion: "N/A",
    address: "41 Kamal Ataturk Avenue, Banani",
    city: "Dhaka",
    postal_code: "1213",
    country: "Bangladesh",
    maritial_status: "unmarried",
    spouse: "N/A",
    no_of_children: 0,
    emergency_contacts: [
      {
        name: "Noor Al Din Ahmed",
        phone: "0122321235",
        relation: "Parent"
      }
    ]
  }