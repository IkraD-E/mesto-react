import PopupWithForm from '../PopupWithForm'
import EditProfilePopupInput from '../popupsInput/EditProfilePopupInput';
import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = React.useContext(CurrentUserContext);
    React.useEffect(() => {
        if (currentUser.name) {
            setUserName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, isOpen]);

    const [userName, setUserName] = React.useState(" ");
    function handleChangeName(e) {
        setUserName(e.target.value);
    }

    const [userDescription, setDescription] = React.useState(" ");
    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          name: userName,
          about: userDescription,
        });
    } 
    
    return (
        <PopupWithForm 
          title="Редактировать профиль" 
          isOpen={isOpen} 
          onClose={onClose}
          name="change-profile"
          onSubmit={handleSubmit}
          buttonText="Сохранить"
        >
            <EditProfilePopupInput userName={userName} userDescription={userDescription} handleChangeName={handleChangeName} handleChangeDescription={handleChangeDescription}/>
        </PopupWithForm>
    )
}