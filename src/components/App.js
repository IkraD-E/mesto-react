import Header from './Header'

import Main from './Main'

import Footer from './Footer'

import PopupWithForm from './PopupWithForm'

import PopupAddPlaceInputs from './popups/PopupAddPlaceInputs'

import PopupChangeAvatarInputs from './popups/PopupChangeAvatarInputs'

import PopupChangeProfileInputs from './popups/PopupChangeProfileInputs'

import React from "react";

function App() {
  const [isEditProfilePopupOpen, openEditProfilePopup] = React.useState(false);
  function handleEditProfileClick() {
    openEditProfilePopup(true);
  }

  const [isEditAvatarPopupOpen, openEditAvatarPopup] = React.useState(false);
  function handleEditAvatarClick() {
    openEditAvatarPopup(true);
  }

  const [isAddPlacePopupOpen, openAddPlacePopup] = React.useState(false);
  function handleAddPlaceClick() {
    openAddPlacePopup(true);
  }

  function closeAllPopups() {
    openAddPlacePopup(false);
    openEditAvatarPopup(false);
    openEditProfilePopup(false);
  }
  
  return (
    <div className="body">
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer/>
        <PopupWithForm title="Редактировать профиль" name="change-profile" buttonText="Сохранить" children={PopupChangeProfileInputs()} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        <PopupWithForm title="Новое место" name="add-place" buttonText="Создать" children={PopupAddPlaceInputs()} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        <PopupWithForm title="Обновить аватар" name="change-avatar" buttonText="Сохранить" children={PopupChangeAvatarInputs()} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;