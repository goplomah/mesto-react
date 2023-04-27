import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
        {/* <div className="popup popup_type_edit">
        <div className="popup__container popup__container_type_edit">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="кнопка закрытия модального окна"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="form form_type_edit" name="profile-form" novalidate>
            <input
              id="name-input"
              type="text"
              name="name"
              className="form__input form__input_name_name"
              placeholder="Имя"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="form__input-error name-input-error"></span>
            <input
              id="job-input"
              type="text"
              name="job"
              className="form__input form__input_name_job"
              placeholder="О себе"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="form__input-error job-input-error"></span>
            <button type="submit" className="form__send form__send_disabled">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="кнопка закрытия модального окна"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="form form_type_add" name="add-form" novalidate >
            <input
            id="add-title-input"
              type="text"
              name="title"
              className="form__input form__input_name_title"
              placeholder="Название"
              minlength="2"
              maxlength="30"
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
            <button type="submit" className="form__send form__send_disabled">Создать</button>
          </form>
        </div>
      </div>
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
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-btn"
            aria-label="кнопка закрытия модального окна"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="form form_type_avatar" name="edit-avatar" novalidate>
            <input
            id="avatar-patch-url-input"
              type="url"
              name="avatar"
              className="form__input form__input_name_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error avatar-patch-url-input-error"></span>
            <button type="submit" className="form__send form__send_disabled">Сохранить</button>
          </form>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default App;
