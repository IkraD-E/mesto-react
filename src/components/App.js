import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import PopupAddPlaceInputs from './popups/PopupAddPlaceInputs'
import PopupChangeAvatarInputs from './popups/PopupChangeAvatarInputs'
import PopupChangeProfileInputs from './popups/PopupChangeProfileInputs'
import ImagePopup from './ImagePopup'
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  const [selectedCard, setSelectedCardData] = React.useState({name: '', link: ''});
  function handleCardClick(link) {
    setSelectedCardData(link);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCardData({name: '', link: ''});
  }
  
  return (
    <div className="body">
      <div className="page">
        <Header/>
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
        />
        <Footer/>
        <PopupWithForm 
          title="Редактировать профиль" 
          name="change-profile" 
          buttonText="Сохранить" 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}>
            <PopupChangeProfileInputs/>
        </PopupWithForm>
        <PopupWithForm 
          title="Новое место" 
          name="add-place" 
          buttonText="Создать" 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}>
            <PopupAddPlaceInputs/>
        </PopupWithForm>
        <PopupWithForm 
          title="Обновить аватар" 
          name="change-avatar" 
          buttonText="Сохранить" 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}>
            <PopupChangeAvatarInputs/>
        </PopupWithForm>
        <ImagePopup 
          card={selectedCard} 
          onClose={closeAllPopups}
        />
        <PopupWithForm 
          title="Вы уверены?" 
          name="delete-image" 
          buttonText="Да"
        />
      </div>
    </div>
  );
}

export default App;