export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      } 
      
    return (
        <li className="element" key={props.card._id}>
            <img className="element__photo" src={props.card.link} onClick={handleClick}/>
            <button className="element_delete_button"></button>
            <div className="element__rectangle">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="button-container">
                    <button className="element__like-btn" type="button"></button>
                    <p className="button-container__count">0</p>
                </div>
            </div>
        </li>
    )
}