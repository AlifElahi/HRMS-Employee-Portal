import React, { useState } from 'react'

const AttendancestatCard = () => {
    const [stat,setStat]=useState({
        today:3.45,
        thisweek:28,
        thismonth:90,
        remaning:90,
        overtime:4
    })

    // useEffect(() => {
       
    // }, [])


    return (
        <div className="card att-statistics">
        <div className="card-body">
          <h5 className="card-title">Statistics</h5>
          <div className="stats-list">
            <div className="stats-info">
              <p>Today <strong>{stat.today} <small>/ 8 hrs</small></strong></p>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: `31%` }} aria-valuenow={31} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="stats-info">
              <p>This Week <strong>28 <small>/ 40 hrs</small></strong></p>
              <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '31%' }} aria-valuenow={31} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="stats-info">
              <p>This Month <strong>90 <small>/ 160 hrs</small></strong></p>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '62%' }} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="stats-info">
              <p>Remaining <strong>90 <small>/ 160 hrs</small></strong></p>
              <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '62%' }} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="stats-info">
              <p>Overtime <strong>4</strong></p>
              <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '22%' }} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
   
    )
}

export default AttendancestatCard
