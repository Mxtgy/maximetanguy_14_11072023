import './modale.css';

function Modale({ isActive, enableClose, onClose, children }) {

    return (
        <div className={ isActive ? 'modale show' : "modale" }>
            { enableClose ? <div onClick={ () => onClose() } className="overlay"></div> : <div className="overlay"></div>}
            
            <div className="modale-container">
                { enableClose ? <button onClick={ () => onClose() } className="close">X</button> : null }
                { children }
            </div>
        </div>
    );
}

export default Modale;