import './modale.css';

function Modale({ isActive, enableClose, onClose, title, content }) {

    return (
        <dialog className={ isActive ? "modale show" : "modale" }>
            { enableClose ? <div onClick={ () => onClose() } className="overlay"></div> : <div className="overlay"></div>}
            
            <div className="modale-container">
                { enableClose ? <button onClick={ () => onClose() } className="close">X</button> : null }
                <h1>{ title }</h1>
                <p>{ content }</p>
            </div>
        </dialog>
    );
}

export default Modale;