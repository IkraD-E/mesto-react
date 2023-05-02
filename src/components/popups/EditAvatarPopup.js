import PopupWithForm from '../PopupWithForm'
import EditAvatarPopupForm from '../popupsForms/EditAvatarPopupForm';
import React from "react";

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const imageRef = React.useRef();
    React.useEffect(() => {
      imageRef.current.value = "";
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: imageRef.current.value
        });
    }
    return (
        <PopupWithForm 
          title="Обновить аватар" 
          isOpen={isOpen} 
          onClose={onClose}
          name="change-avatar"
          onSubmit={handleSubmit}
          buttonText="Сохранить" 
        >
            <EditAvatarPopupForm imageRef={imageRef} />
        </PopupWithForm>
    )
}