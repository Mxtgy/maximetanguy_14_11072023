import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchEmployees } from '../../utils/apiClient';
import DataTable from 'react-data-table-component';
import './EmployeeList.css';


/*
This is the employee list component,
it includes a datatable to visualize all employees.
*/
function EmployeeList() {

    const [logErr, setLogErr] = useState(false);
    const [pending, setPending] = useState(true);
    const [filterText, setFilterText] = useState();
    const [newResults, setNewResults] = useState();
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const columns = [
        {
            name: 'First Name',
            selector: row => row.first_name,
            sortable: true
        },
        {
            name: 'Last Name',
            selector: row => row.last_name,
            sortable: true
        },
        {
            name: 'Start Date',
            selector: (row) => new Date(row.start_date).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true
        },
        {
            name: 'Date of Birth',
            selector: (row) => new Date(row.birth_date).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'Street',
            selector: row => row.street,
            sortable: true
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true
        },
        {
            name: 'State',
            selector: row => row.state,
            sortable: true
        },
        {
            name: 'Zip Code',
            selector: row => row.zipcode,
            sortable: true
        }
    ];

    useEffect(() => {
        /*
        We fetch all the employees here.
        */
        async function getData() {
            const getData = await fetchEmployees();
            if (getData && getData.employees && getData.employees.length > 0) {
                setFilterText(getData.employees);
                setNewResults(getData.employees);
                setPending(false);
            } else {
                setLogErr(true);
            }
        }
        getData();
    }, []);

    /*
    Filtering the results when using the searchbar.
    */
    function handleFilter(e) {
        const newData = filterText.filter(row => {
            return row.first_name.toLowerCase().includes(e.target.value.toLowerCase())
                || row.last_name.toLowerCase().includes(e.target.value.toLowerCase())
                || row.city.toLowerCase().includes(e.target.value.toLowerCase())
                || row.street.toLowerCase().includes(e.target.value.toLowerCase())
                || row.state.toLowerCase().includes(e.target.value.toLowerCase())
                || row.department.toLowerCase().includes(e.target.value.toLowerCase())
                || row.zipcode.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setNewResults(newData);
        setResetPaginationToggle(!resetPaginationToggle);
    }

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            { logErr ? <p>Unable to retrieve employees list</p> : null }
            <div className="search-container">
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" onChange={ handleFilter } />
            </div>
            <DataTable
                fixedHeader
                columns={columns}
                data={newResults}
                progressPending={pending}
                pagination
                paginationResetDefaultPage={ resetPaginationToggle }
                fixedHeaderScrollHeight="445px"
            />

            <NavLink to="/">Home</NavLink>
        </div>
    );
}

export default EmployeeList;