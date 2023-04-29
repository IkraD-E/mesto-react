import { CurrentUserContext } from "../context/CurrentUserContext";
import React from "react";

export default function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `element__like-btn ${isLiked && "element__like-btn_active"}`
      );; 
    
    function handleCardClick() {
        props.onCardClick(props.card);
    } 

    function handleCardLikeClick() {
        props.onCardLikeClick(props.card);
    }
    
    function handleCardDeleteClick() {
        props.onCardDeleteClick(props.card);
    }
    return (
        <li className="element">
            <img className="element__photo" src={props.card.link} onClick={handleCardClick} alt={props.card.name}/>
            {isOwn && <button className='element_delete_button' onClick={handleCardDeleteClick} />}
            <div className="element__rectangle">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="button-container">
                    <button className={cardLikeButtonClassName} onClick={handleCardLikeClick} type="button"/>
                    <p className="button-container__count">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}