import Card from './Card'
import React from 'react'
import { CurrentUserContext } from "../context/CurrentUserContext";
import { CardContext } from "../context/CardContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const cardsList = React.useContext(CardContext); 

  return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-wrap">
            <img className="profile__avatar" src={currentUser.avatar} alt="аватар"/>
            <button className="profile__edit-button-avatar" type="button" onClick={props.onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__header">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__text">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements" aria-label="places">
          <ul className="elements__list">
            {cardsList.map((card) => (
              <Card 
                card={card} 
                onCardClick={props.onCardClick}
                key={card._id}
                onCardLikeClick={props.onCardLikeClick}
                onCardDeleteClick={props.onCardDeleteClick}
              />
            ))}
          </ul>
        </section>
      </main>
  )
}

export default Main;