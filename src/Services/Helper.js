

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
        let prod = `${hours}.${minutes} hrs`
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