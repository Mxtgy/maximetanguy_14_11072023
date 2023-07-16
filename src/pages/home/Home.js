import { NavLink } from 'react-router-dom';
import Datepicker from '../../components/datepicker/Datepicker.js';
import Select from '../../components/select/Select.js';
import { STATES_LIST, DEPARTMENT_LIST } from '../../utils/const.js';

function Home() {

    var contentState = STATES_LIST;
    var contentDepartment = DEPARTMENT_LIST;

    function handleSubmit(e) {
        e.preventDefault();
        var form = document.querySelector('form');
        if (form) {
            var select2 = form.querySelector('#department').value;
            console.log(select2);
        }
    }
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <NavLink to="/employee-list">View Current Employees</NavLink>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
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

                        <Select tagname="state" title="State" content={contentState} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <Select tagname="department" title="Department" content={contentDepartment} />
                    
                </form>
                <button type="submit" onClick={handleSubmit}>Save</button>

                {/*
                <MODAL ISOPEN=FALSE>
                    <div>
                    <p>L'utilisateur a bien été créé !</p>
                    </div>
                </MODAL>
                */}
            </div>
        </>
    );
}

export default Home;