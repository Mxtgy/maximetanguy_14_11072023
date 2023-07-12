import './Datepicker.module.css';

function Datepicker({ name, id }) {

    return (
        <>
            <label for={ id }>{ name }</label>
            <input className="datepicker" type="date" id={ id } />
        </>
    );
}

export default Datepicker;