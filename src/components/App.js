import React from "react";
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import PopupAddPlaceFrom from './popups/PopupAddPlaceFrom'
import PopupChangeAvatarForm from './popups/PopupChangeAvatarForm'
import PopupChangeProfileForm from './popups/PopupChangeProfileForm'
import PopupDeleteImageFrom from "./popups/PopupDeleteImageFrom";
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from "../context/CurrentUserContext";
import { CardContext } from "../context/CardContext";
import { api } from '../utils/Api'

function App() {
  const [currentUser, setUserData] = React.useState({});
  const [cardsList, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserDataFromServer(), api.getCardFromServer()])
      .then(([userData, cards]) => {
          setUserData(userData);
          setCards(cards);
    })
      .catch(res => console.log(`Ошибка: ${res.status}`));
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(res => console.log(`Ошибка: ${res.status}`));
  }

  function handleCardDelete(card) {
    api.deleteCardFromServer(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => { return !(c._id === card._id)}));
      })
      .catch(res => console.log(`Ошибка: ${res.status}`));
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then(() => {
        return api.getUserDataFromServer()
      })
      .then((userData) => {
        setUserData(userData);
      })
      
      .then(() => {
        closeAllPopups();
      })
      .catch(res => console.log(`Ошибка: ${res.status}`));
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCardData({name: '', link: ''});
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardContext.Provider value={cardsList}>
      <div className="body">
        <div className="page">
          <Header/>
          <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick} 
            onCardClick={handleCardClick}
            onCardLikeClick={handleCardLike}
            onCardDeleteClick={handleCardDelete}
          />
          <Footer/>
          <PopupWithForm 
            title="Редактировать профиль" 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
          >
              <PopupChangeProfileForm onUpdateUser={handleUpdateUser}/>
          </PopupWithForm>
          <PopupWithForm 
            title="Новое место" 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups}>
              <PopupAddPlaceFrom/>
          </PopupWithForm>
          <PopupWithForm 
            title="Обновить аватар" 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}>
              <PopupChangeAvatarForm/>
          </PopupWithForm>
          <PopupWithForm 
            title="Вы уверены?" 
          >
            <PopupDeleteImageFrom/>
          </PopupWithForm>
          <ImagePopup 
            card={selectedCard} 
            onClose={closeAllPopups}
          />
        </div>
      </div>
      </CardContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;