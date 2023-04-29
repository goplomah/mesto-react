function PopupWithForm({title, name, children, isOpen, submitButtonText, onClose}) {
    return (
        <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
        <div className={`popup__container popup__container_type_${name}`}>
          <button
            type="button"
            className="popup__close-btn"
            aria-label={"кнопка закрытия модального окна"}
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          <form className={`form form_type_${name}`} name={name} noValidate>
            {children}
            <button type="submit" className="form__send form__send_disabled">{submitButtonText || 'Сохранить'}</button>
          </form>
        </div>
      </div>
    );
}

export default PopupWithForm;