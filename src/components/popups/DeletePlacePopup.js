import PopupWithForm from '../PopupWithForm'
import DeletePlacePopupFrom from '../popupsForms/DeletePlacePopupFrom';

export default function DeletePlacePopup({isOpen, onClose, onSubmit, card}) {
    return (
        <PopupWithForm 
          isOpen={isOpen} 
          onClose={onClose}
          title="Вы уверены?" 
        >
          <DeletePlacePopupFrom card={card} onSubmit={onSubmit}/>
        </PopupWithForm>
    )
}