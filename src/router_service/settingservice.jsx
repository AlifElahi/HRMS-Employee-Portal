
import Branch from '../MainPage/Setup/Branch';
import Department from '../MainPage/Setup/Department';
import Holidays from '../MainPage/Setup/Holidays';
import LeaveSetup from '../MainPage/Setup/LeaveSetup';
import ShiftList from '../MainPage/Setup/shiftlist';
import Designation from '../MainPage/Setup/Designation';



export default [  
   {
      path: 'holiday-setup',
      component: Holidays
   },
   {
      path: 'leave-setup',
      component: LeaveSetup
   },
   {
      path: 'department-setup',
      component: Department
   },
   {
      path: 'branch-setup',
      component: Branch
   },
   {
      path: 'shift-setup',
      component: ShiftList
   },
   {
      path: 'designations-setup',
      component: Designation
   }
  
]