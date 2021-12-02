import React, { PureComponent } from 'react'
import {
    headerlogo, lnEnglish, lnFrench, lnSpanish, lnGerman, Avatar_02, Avatar_03, Avatar_05,
    Avatar_06, Avatar_08, Avatar_09, Avatar_13, Avatar_17, Avatar_21
} from '../../Entryfile/imagepath'
import { setReadNotification } from '../../Services/graphqlServices'
import { notification_Mapper } from '../../Services/Helper'




const _setReadNotification = async(token,id,link)=>{
    await setReadNotification(token,id)
    window.location.href=link

}

const renderNotificationList = (list,token) => {
    return (
        <>
            {list.map((x, idx) => {
                let data=notification_Mapper(x);
                return (
                    <li className="notification-message" key={idx}>
                        <a  onClick={()=> _setReadNotification(token,x.id,data.link)}>
                            <div className="media">

                                <div className="media-body">
                                    <p className="noti-details"><span className="noti-title">{data.msg}</span></p>
                                    <p className="noti-time"><span className="notification-time">{data.time}</span></p>
                                </div>
                            </div>
                        </a>
                    </li>)
            }
            )}

        </>
    )
}
export class NotificationPure extends PureComponent {
    constructor(props) {
        super(props);
    }

  
    render() {
        return (
            <li className="nav-item dropdown">
                <a className="dropdown-toggle nav-link" data-toggle="dropdown">
                    <i className="fa fa-bell-o" /> {this.props.count > 0 ? <span className="badge badge-pill">{this.props.count}</span> : <></>}
                </a>
                <div className="dropdown-menu notifications">
                    <div className="topnav-dropdown-header">
                        <span className="notification-title">Notifications</span>
                        <a className="clear-noti"> Clear All </a>
                    </div>
                    <div className="noti-content">
                        <ul className="notification-list">
                            {renderNotificationList(this.props.list,this.props.token)}
                        </ul>
                    </div>
                    <div className="topnav-dropdown-footer">
                        <a href="/hive_hrm/app/general/notifications">View all Notifications</a>
                    </div>
                </div>
            </li>
        )
    }
}

export default NotificationPure
