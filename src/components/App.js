import React from "react";
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import EditProfilePopup from "./popups/EditProfilePopup";
import EditAvatarPopup from "./popups/EditAvatarPopup";
import AddPlacePopup from "./popups/AddPlacePopup";
import DeletePlacePopup from "./popups/DeletePlacePopup";
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from "../context/CurrentUserContext";
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

  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = React.useState(false);
  function handleDeletePlaceClick(link) {
    setIsDeletePlacePopupOpen(true);
    setSelectedCardData(link);
  }

  const [ImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCardData] = React.useState({name: '', link: ''});
  function handleCardClick(link) {
    setIsImagePopupOpen(true);
    setSelectedCardData(link);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCardData({name: '', link: ''});
    setIsImagePopupOpen(false)
    setIsDeletePlacePopupOpen(false);
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
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .then(() => {
        closeAllPopups();
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

  function handleUpdateAvatar(link) {
    api.handleChangeAvatar(link)
      .then((userData) => {
        setUserData(userData);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch(res => console.log(`Ошибка: ${res.status}`));
  }

  function handleAddPlaceSubmit(newCard) {
    api.addNewPlaceToServer(newCard)
      .then((newCard) => setCards([newCard, ...cardsList]))
      .then(() => {
        closeAllPopups();
      })
      .catch(res => console.log(`Ошибка: ${res.status}`));
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header/>
          <Main 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick} 
            onCardClick={handleCardClick}
            onCardLikeClick={handleCardLike}
            onCardDeleteClick={handleDeletePlaceClick}
            cardsList={cardsList}
          />
          <Footer/>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            
          />
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <DeletePlacePopup
            isOpen={isDeletePlacePopupOpen} 
            onClose={closeAllPopups}
            onDeletePlace={handleCardDelete}
            card={selectedCard}
          />
          <ImagePopup 
            isOpen={ImagePopupOpen}
            card={selectedCard} 
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;