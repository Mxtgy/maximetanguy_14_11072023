import { NavLink } from 'react-router-dom';
import Datepicker from '../../components/datepicker/Datepicker.js';

function Home() {
    return (
        <>
            <div class="title">
                <h1>HRnet</h1>
            </div>
            <div class="container">
                <NavLink to="/employee-list">View Current Employees</NavLink>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <Datepicker name="Date of Birth" id="date-of-birth" />
                    <Datepicker name="Start Date" id="start-date" />

                    <fieldset class="address">
                        <legend>Address</legend>

                        <label for="street">Street</label>
                        <input id="street" type="text" />

                        <label for="city">City</label>
                        <input id="city" type="text" />

                        <label for="state">State</label>
                        <select name="state" id="state"></select>

                        <label for="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label for="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>
                <button>Save</button>
            </div>
        </>
    );
}

export default Home;