function ImagePopup({name}) {
    return (
        <div className={`popup popup_type_${name}`}>
        <div className={`popup__container popup__container_type_${name}`}>
          <button
            type="button"
            className="popup__close-btn"
            aria-label={"кнопка закрытия модального окна"}
          ></button>
          <figure className="popup__image-wrapper">
            <img src="#" alt="" className="popup__image" />
            <figcaption className="popup__discription">
              <p className="popup__text"></p>
            </figcaption>
          </figure>
        </div>
      </div>
    );
}

export default ImagePopup;