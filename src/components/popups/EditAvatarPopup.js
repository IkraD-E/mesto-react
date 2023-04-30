import PopupWithForm from '../PopupWithForm'
import EditAvatarPopupForm from '../popupsForms/EditAvatarPopupForm';

export default function EditAvatarPopup({isOpen, onClose, onSubmit}) {
    return (
        <PopupWithForm 
          title="Обновить аватар" 
          isOpen={isOpen} 
          onClose={onClose}>
            <EditAvatarPopupForm onUpdateAvatar={onSubmit}/>
        </PopupWithForm>
    )
}