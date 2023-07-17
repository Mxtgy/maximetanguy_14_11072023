import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchEmployees } from '../../utils/apiClient';

function EmployeeList() {

    const [employees, setEmployees] = useState();
    const [logErr, setLogErr] = useState(false);

    useEffect(() => {
        async function getData() {
            const getData = await fetchEmployees();
            if (getData && getData.employees && getData.employees.length > 0) {
                setEmployees(getData.employees);
                console.log(getData.employees);
            } else {
                setLogErr(true);
            }
        }
        getData();
    }, []);

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            { logErr ? <p>Unable to retrieve user's data</p> : 
                <table id="employee-table" className="display"></table>
            }

            <NavLink to="/">Home</NavLink>
        </div>
    );
}

export default EmployeeList;