import React from 'react';
import NavbarComponent from './components/NavbarComponent'; // Ensure the path is correct
import LoginComponent from './components/LoginComponent';
import { Route, Routes } from 'react-router-dom';
import SignupComponent from './components/SignupComponent';
import TaskdesComponent from './components/ShowTask';
import AddtaskComponent from './components/AddtaskComponent';
import LogoutComponent from './components/LogoutComponent';
import UpdateAssignee from './components/UpdateAssignee';

const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/login' element={<LoginComponent />}></Route>
        <Route path='/signup' element={<SignupComponent />}></Route>
        <Route path='/home' element={<TaskdesComponent />}></Route>
        <Route path='/addtask' element={<AddtaskComponent />}></Route>
        <Route path='/logout' element={<LogoutComponent />}></Route>
        <Route path='/updateassignee' element={<UpdateAssignee />}></Route>



      </Routes>
    </div>
  );
}

export default App;
