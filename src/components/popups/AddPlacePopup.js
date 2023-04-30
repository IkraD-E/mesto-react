import PopupWithForm from '../PopupWithForm'
import AddPlacePopupFrom from '../popupsForms/AddPlacePopupFrom';

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    return (
        <PopupWithForm 
            title="Новое место" 
            isOpen={isOpen} 
            onClose={onClose}
        >
            <AddPlacePopupFrom onAddPlace={onAddPlace}/>
        </PopupWithForm>
    )
}