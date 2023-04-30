import PopupWithForm from '../PopupWithForm'
import EditProfilePopupForm from '../popupsForms/EditProfilePopupForm';

export default function EditProfilePopup({isOpen, onClose, onSubmit}) {
    return (
        <PopupWithForm 
          title="Редактировать профиль" 
          isOpen={isOpen} 
          onClose={onClose}
        >
            <EditProfilePopupForm onUpdateUser={onSubmit}/>
        </PopupWithForm>
    )
}