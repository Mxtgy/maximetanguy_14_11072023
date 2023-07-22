import './Datepicker.css';
import PropTypes from 'prop-types';


/*
This is the datepicker component present on the homepage form.
*/
function Datepicker({ name, id }) {

    return (
        <>
            <label htmlFor={ id }>{ name }</label>
            <input className="datepicker" type="date" id={ id } />
        </>
    );
}

Datepicker.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default Datepicker;