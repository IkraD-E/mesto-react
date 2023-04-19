export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
      } 
      
    return (
        <li className="element">
            <img className="element__photo" src={props.card.link} onClick={handleClick} alt={props.card.name}/>
            <button className="element_delete_button"/>
            <div className="element__rectangle">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="button-container">
                    <button className="element__like-btn" type="button"/>
                    <p className="button-container__count">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}