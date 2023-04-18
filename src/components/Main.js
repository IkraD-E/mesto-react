import avatar from '../images/loading.gif'

import ElementTemplate from './ElementTemplate'

import PopupWithForm from './PopupWithForm'

import PopupImage from './PopupImage'

import React from 'react'

import { api } from '../utils/Api'

function Main(props) {
  const [userData, setUserData] = React.useState("");
  const [cardsList, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserDataFromServer(), api.getCardFromServer()])
      .then(([userData, cards]) => {
          setUserData(userData);
          setCards(cards);
    })
      .catch(res => console.log(`Ошибка: ${res.status}`));
  }, []);
  


  return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-wrap">
            <img className="profile__avatar" src={userData.avatar} alt="аватар"/>
            <button className="profile__edit-button-avatar" type="button" onClick={props.onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__header">{userData.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__text">{userData.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements" aria-label="places">
          <ul className="elements__list">
            {cardsList.map((card) => (
              <ElementTemplate card={card}/>
            ))}
          </ul>
        </section>
        <PopupWithForm title="Вы уверены?" name="delete-image" buttonText="Да"/>
        <PopupImage/>
      </main>
  )
}

export default Main;