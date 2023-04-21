import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    React.useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen]);

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleLinkChange = (event) => {
        setLink(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddPlace({name, link});
    }

    return (
        <PopupWithForm
        name={'popup_new-card'}
        title={'Новое место'}
        isOpen={props.isOpen}
        onButtonClose={props.onButtonClose}
        onOverlayClose={props.onOverlayClose}
        buttonText={'Создать'}
        onSubmit={handleSubmit}
    >
        <input type="text" className="popup__input popup__input_plase-name" name="name" id="plase-name" value={name}
            placeholder="Название" minLength="2" maxLength="40" required onChange={handleNameChange}/>
        <span className="popup__input-error" id="plase-name-error"></span>
        <input type="url" className="popup__input popup__input_link-images" name="link" id="url-images" value={link}
            placeholder="Ссылка на картинку" required onChange={handleLinkChange}/>
        <span className="popup__input-error" id="url-images-error"></span>
    </PopupWithForm>
    )
}

export default AddPlacePopup