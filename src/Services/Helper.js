import dateFormat from "dateformat";


export const monthSpecifictiemSheetdataFormater = async (data) => {
  const objmaker = (x, idx) => {
    let dd = `${x.date}T${x.check_in[0].time}`
    let dw = x.check_out.length ? `${x.date}T${x.check_out[x.check_out.length - 1].time}` : ""
    let datedd = new Date(dd)
    let dateww = dw !== "" ? new Date(dw) : new Date()
    let pi = dateFormat(datedd, "h:MM TT");
    let po = dateFormat(dateww, "h:MM TT");
    const hours = parseInt(Math.abs(dateww - datedd) / (1000 * 60 * 60) % 24);
    const dif = parseFloat(parseFloat(Math.abs(dateww - datedd) / (1000 * 60 * 60) % 24).toFixed(2));
    const minutes = parseInt(Math.abs(dateww.getTime() - datedd.getTime()) / (1000 * 60) % 60);
    let prod = `${hours}:${minutes} hrs`
    let p = {
      sl: idx + 1,
      date: x.date,
      punch_in: pi,
      punch_out: po,
      production: prod,
      dif: dif
    }
    return p
  }
  return new Array(data.length).fill(null).map((y, idx) => objmaker(data[idx], idx))

}

export const makeMonthStatsDataFormater = async (data) => {


  const sectohr=(x)=>{
    return parseFloat(parseFloat(x/3600).toFixed(2))
  }

  const todays_work_hr=()=>{
    let work_hr=sectohr(data.today.work_seconds)
    if(data.today.last_activity.activity=="punch_in"){
      let todate= new Date()
      let sDate= dateFormat(todate,"isoDate")+'T'+data.today.last_activity.time
      let addsec=new Date(sDate).getTime()
      let additional_hr= sectohr((todate.getTime()-addsec)/1000)
      work_hr=work_hr+additional_hr
    }
    return work_hr
  }

  let today_work_hrs= todays_work_hr();
  let week_work_hrs= sectohr(data.week.work_seconds)
  let month_work_hrs= sectohr(data.month.work_seconds)
  let todayParcentage= (today_work_hrs*100/data.today.target).toFixed(1)+"%"
  let weekParcentage= (week_work_hrs*100/data.week.target).toFixed(1)+"%"
  let monthParcentage= (month_work_hrs*100/data.month.target).toFixed(1)+"%"

  let obj={
    today_work_hrs,
    week_work_hrs,
    month_work_hrs,
    todayParcentage,
    monthParcentage,
    weekParcentage,
    todayTarget:data.today.target,
    weekTarget:data.week.target,
    monthTarget:data.month.target
  }

  return obj
  
}

export const getEmployeeList = async (token) => {

    try {
        let res = await axios.get('https://sso.hivecorelimited.com/users',
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