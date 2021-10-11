/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AllEmployees from './allemployees';

import LeaveEmployee from './leaveemployee';

import AttendanceEmployee from './attendanceemployee';

import EmployeeDashboard from './employeedashboard';
// import { OidcSecure } from '@axa-fr/react-oidc-context';
import { withOidcSecure } from '@axa-fr/react-oidc-context';
import EmployeeProfile from './employeeprofile';

const EmployeesRoute1 = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/employee-dashboard`} />
      <Route path={`${match.url}/allemployees`} component={withOidcSecure(AllEmployees)} />
      <Route path={`${match.url}/leaves-employee`} component={withOidcSecure(LeaveEmployee)} />
      <Route path={`${match.url}/attendance-employee`} component={withOidcSecure(AttendanceEmployee)} />
      <Route path={`${match.url}/employee-dashboard`} component={withOidcSecure(EmployeeDashboard)} />
      <Route path={`${match.url}/employee-profile/:id?`} component={withOidcSecure(EmployeeProfile)} />
   </Switch>
);

export default EmployeesRoute1;
