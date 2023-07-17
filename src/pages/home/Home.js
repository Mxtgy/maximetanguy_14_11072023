import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Datepicker from '../../components/datepicker/Datepicker.js';
import Select from '../../components/select/Select.js';
import Modale from '../../components/modale/Modale.js';
import createNewEmployee from '../../utils/createNewEmployee.js';
import { createEmployee } from '../../utils/apiClient.js';
import { STATES_LIST, DEPARTMENT_LIST } from '../../utils/const.js';


function Home() {

    const [isActive, setIsActive] = useState(false);

    function clearFields(e) {
        Array.from(e.target).forEach((e) => (e.value = ""));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        var form = document.querySelector('form');
        if (form) {
            var newEmployeeObject = createNewEmployee(form);
            if (!newEmployeeObject) return false;
            const employee = await createEmployee(newEmployeeObject);
            if (!employee) return false;
            console.log("success! employee created");
            console.log(employee);
            console.log("je passe en premier");
            setIsActive(true);
            clearFields(e);
        }
    }

    function closeModale() {
        setIsActive(false);
    }

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <NavLink to="/employee-list">View Current Employees</NavLink>
                <h2>Create Employee</h2>
                <form action="#" onSubmit={handleSubmit} id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <Datepicker name="Date of Birth" id="date-of-birth" />
                    <Datepicker name="Start Date" id="start-date" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <Select id="state" tagname="state" title="State" content={STATES_LIST} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <Select id="department" tagname="department" title="Department" content={DEPARTMENT_LIST} />

                    <button type="submit">Save</button>    
                </form>
                
                    
                <Modale enableClose={ true } onClose={ closeModale } isActive={ isActive }>
                    <div>
                       <h1>Bonjour !</h1>
                        <p>L'utilisateur a bien été créé !</p>
                    </div>
                </Modale>
                
            </div>
        </>
    );
}

export default Home;