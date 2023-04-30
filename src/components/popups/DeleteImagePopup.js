import PopupWithForm from '../PopupWithForm'
import DeleteImagePopupFrom from '../popupsForms/DeleteImagePopupFrom';

export default function DeleteImagePopup({isOpen, onClose, onSubmit}) {
    return (
        <PopupWithForm 
          isOpen={isOpen} 
          onClose={onClose}
          title="Вы уверены?" 
        >
          <DeleteImagePopupFrom/>
        </PopupWithForm>
    )
}