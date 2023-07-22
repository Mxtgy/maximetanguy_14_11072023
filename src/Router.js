import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.js';
import EmployeeList from './pages/employee_list/EmployeeList.js';
import ErrorRedirect from './pages/error/ErrorRedirect.js';

/*
This is the router managing all the routes.
*/
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/employee-list" element={<EmployeeList/>}></Route>
            <Route path="*" element={<ErrorRedirect/>}></Route>
        </Routes>
    );
}

export default Router;
