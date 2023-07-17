const METHOD_POST = 'POST';
const METHOD_GET = 'GET';

/**
 * Fetch the data
 * @param { string } path Url used for the fetch
 * @param { Object } content Object with the method, headers and body
 * @returns { (Object|boolean) }
 */
async function fetchData(path, content) {
    const url = 'http://localhost:3000/employee' + path;
    try {
        const response = await fetch(url, content);
        const json = await response.json();
        if (json && json.status === 200) {
            return json;
        }
        return false;
    } catch(err) {
        console.log(err);
    }
}

/**
 * Initialize the fetch to get all the employees
 * @returns { Object | boolean}
 */
async function fetchEmployees() {
    const path = '/employees';
    const callObject = {
        method: METHOD_GET,
    }
    return fetchData(path, callObject);
}

/**
 * Initialize the fetch to create a new employee
 * @param { Object } employee Object with containing the new employee informations
 * @returns { Object | boolean}
 */
async function createEmployee(employee) {
    const path = '/create';
    const data = employee;
    const callObject = {
        method: METHOD_POST,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetchData(path, callObject);
}

export { createEmployee, fetchEmployees };