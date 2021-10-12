import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// We will create these two pages in a moment
//Authendication
import LoginPage from './loginpage'
import RegistrationPage from './RegistrationPage'
import ForgotPassword from './forgotpassword'
import OTP from './otp'
import LockScreen from './lockscreen'
import { AuthenticationProvider, oidcLog } from '@axa-fr/react-oidc-context';

import { OidcSecure } from '@axa-fr/react-oidc-context';

//Main App
import DefaultLayout from './Sidebar/DefaultLayout';
import Settinglayout from './Sidebar/Settinglayout';



// import 'Assets/css/font-awesome.min.css';

import $ from 'jquery';
import LogoutPage from './logout';
// window.jQuery = $;
// window.$ = $;
// import UserPage from './pages/UserPage'
/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
// const InitialPath = ({ component: Component, ...rest, authUser }) =>
//    <Route
//       {...rest}
//       render={props =>
//          authUser
//             ? <Component {...props} />
//             : <Redirect
//                to={{
//                   pathname: '/login',
//                   state: { from: props.location }
//                }}
//             />}
//    />;

const App =(props) => {
    // componentDidMount() {
    //     if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
    //         || location.pathname.includes("otp") || location.pathname.includes("lockscreen")) {
    //         $('body').addClass('account-page');
    //     } else if (location.pathname.includes("error-404") || location.pathname.includes("error-500")) {
    //         $('body').addClass('error-page');
    //     }
    // }
    const { location, match, user } = props;

    // $('body').addClass('account-page');

    useEffect(() => {
        if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
            || location.pathname.includes("otp") || location.pathname.includes("lockscreen")) {
            $('body').addClass('account-page');
        } else if (location.pathname.includes("error-404") || location.pathname.includes("error-500")) {
            $('body').addClass('error-page');
        }
    }, [])
   


        // if (location.pathname === '/') {
        // if (user === null) {
        //     return (<Redirect to={'/login'} />);
        // } else {
        //     return (<Redirect to={'/hive_hrm/app/employees/dashboard'} />);
        // }
        // }
        if (location.pathname === '/') {
            return (<Redirect to={'/login'} />);
        }
        return (
            <Switch>
                 <Route path="/logout" component={LogoutPage} />
                 <Route path="/login" component={LoginPage} />
                {/*    <Route path="/forgotpassword" component={ForgotPassword} />
                    <Route path="/register" component={RegistrationPage} />
                    <Route path="/otp" component={OTP} />
                    <Route path="/lockscreen" component={LockScreen} /> */}
                <Route path="/app">
                    {/* <OidcSecure> */}
                        <DefaultLayout />
                    {/* </OidcSecure> */}
                </Route>
                {/* <Route path="/app" component={DefaultLayout} /> */}
                <Route path="/settings" component={Settinglayout} />
            </Switch>
        )
    }

export default App
