import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onClose={closeAllPopups}
        />
        <Footer />
        <PopupWithForm 
          title='Редактировать профиль'
          name='edit'
          isOpen={isEditProfilePopupOpen}
          submitButtonText='Сохранить'
          onClose={closeAllPopups}
        >
          <input
              id="name-input"
              type="text"
              name="name"
              className="form__input form__input_name_name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__input-error name-input-error"></span>
            <input
              id="job-input"
              type="text"
              name="job"
              className="form__input form__input_name_job"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__input-error job-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title='Новое место'
          name='add'
          isOpen={isAddPlacePopupOpen}
          submitButtonText='Создать'
          onClose={closeAllPopups}
        >
          <input
            id="add-title-input"
              type="text"
              name="title"
              className="form__input form__input_name_title"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error add-title-input-error"></span>
            <input
            id="add-url-input"
              type="url"
              name="link"
              className="form__input form__input_name_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error add-url-input-error"></span>
        </PopupWithForm>
      <div className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="кнопка закрытия модального окна"
          ></button>
          <figure className="popup__image-wrapper">
            <img src="#" alt="" className="popup__image" />
            <figcaption className="popup__discription">
              <p className="popup__text"></p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="кнопка закрытия модального окна"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="form form_type_delete"><button className="form__send">Да</button></form>
        </div>
      </div>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        submitButtonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
            id="avatar-patch-url-input"
              type="url"
              name="avatar"
              className="form__input form__input_name_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error avatar-patch-url-input-error"></span>
      </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
