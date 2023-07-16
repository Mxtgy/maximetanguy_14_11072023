import './Select.module.css';

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

export default Select;