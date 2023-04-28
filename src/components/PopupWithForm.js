function PopupWithForm({title, name, children}) {
    return (
        <div className={`popup popup_type_${props.name}`}>
        <div className={`popup__container popup__container_type_${props.name}`}>
          <button
            type="button"
            className="popup__close-btn"
            aria-label={"кнопка закрытия модального окна"}
          ></button>
          <h2 className="popup__title">{title}</h2>
          <form className={`form form_type_${props.name}`} name={name} noValidate>
            {children}
            <button type="submit" className="form__send form__send_disabled">{buttonText}</button>
          </form>
        </div>
      </div>
    );
}

export default PopupWithForm;