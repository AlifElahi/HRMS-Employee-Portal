
import Branch from '../MainPage/Setup/Branch';
import Department from '../MainPage/Setup/Department';
import LeaveSetup from '../MainPage/Setup/leavetype';
import ShiftList from '../MainPage/Setup/shiftlist';



export default [  
  
  
  
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
   }
  
]