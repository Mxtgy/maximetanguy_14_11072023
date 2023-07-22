import './Select.css';
import PropTypes from 'prop-types';


/*
This is the select component present on the homepage form.
*/
function Select({ id, tagname, title, content}) {

    var isContent = content;

    return (
        <>
            { isContent ?     
                <>
                    <label htmlFor={ tagname }>{ title }</label>
                    <div className="select-container">
                        <select className="select" name={ tagname } id={ id }>
                            { isContent.map((i, index) => <option key={ index } value={i.abbreviation ? i.abbreviation : i.name}>{i.name}</option>)}
                        </select>
                    </div>
                </>
            : null }
        </>
    );
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    tagname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired
}

export default Select;