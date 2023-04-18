import avatar from '../images/loading.gif'

import ElementTemplate from './ElementTemplate'

import PopupWithForm from './PopupWithForm'

import PopupImage from './PopupImage'

export default function Main(props) {
  return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-wrap">
            <img className="profile__avatar" src={avatar} alt="аватар"/>
            <button className="profile__edit-button-avatar" type="button" onClick={props.onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__header">Загружается...</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__text">Загружается...</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements" aria-label="places">
          <ul className="elements__list">
          </ul>
        </section>
        <PopupWithForm title="Вы уверены?" name="delete-image" buttonText="Да"/>
        <PopupImage/>
        <ElementTemplate/>
      </main>
  )
}