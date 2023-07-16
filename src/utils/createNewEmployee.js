/**
 * Create a new employee object.
 * @param { HTMLElement } form Form element targeted to retrieve the values
 * @returns { (Object|boolean) }
 */
function createNewEmployee(form) {

    var employee = {};

    var firstName = form.querySelector('#first-name');
    var lastName = form.querySelector('#last-name');
    var birth = form.querySelector('#date-of-birth');
    var start = form.querySelector('#start-date');
    var street = form.querySelector('#street');
    var city = form.querySelector('#city');
    var state = form.querySelector('#state');
    var zipcode = form.querySelector('#zip-code');
    var department = form.querySelector('#department');

    if (!firstName || !lastName || !birth || !start || !street || !city || !state || !zipcode || !department) return false;
    if (!firstName.value || !lastName.value || !birth.value || !start.value || !street.value || !city.value || !state.value || !zipcode.value || !department.value) return false;

    employee.first_name = firstName.value;
    employee.last_name = lastName.value;
    employee.birth_date = birth.value;
    employee.start_date = start.value;
    employee.street = street.value;
    employee.city = city.value;
    employee.state = state.value;
    employee.zipcode = zipcode.value;
    employee.department = department.value;

    return employee;

}

export default createNewEmployee;