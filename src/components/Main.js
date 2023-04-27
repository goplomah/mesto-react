function Main() {
    return (
<main classNameName="content">
        <section className="profile">
          <div className="profile__wrapper">
            <div className="profile__avatar-wrapper"><img
              src="#"
              alt="аватар пользователя."
              className="profile__avatar"
            /></div>
            <div className="profile__info">
              <div className="profile__name-wrapper">
                <h1 className="profile__name"></h1>
                <button
                  type="button"
                  className="button-edit"
                  aria-label="кнопка редактирования"
                ></button>
              </div>
              <p className="profile__job"></p>
            </div>
          </div>
          <button
            type="button"
            className="button-add"
            aria-label="кнопка добавления карточки на страницу"
          ></button>
        </section>
        <section
          className="places"
          aria-label="сетка карточек красивых мест России."
        >
          <ul className="places__cards">
            <template className="template__card">
              <li className="places__item">
                <figure className="places__image-wrapper">
                  <img src="#" alt="" className="places__image" />
                  <figcaption className="places__discription">
                    <p className="places__text"></p>
                    <div className="places__wrapper-like">
                      <button
                      type="button"
                      className="places__button-like"
                      aria-label="кнопка лайка"
                    ></button>
                    <p className="places__like-counter"></p>
                  </div>
                  </figcaption>
                  <button
                    type="button"
                    className="places__button-trash"
                    aria-label="кнопка удаления"
                  ></button>
                </figure>
              </li>
            </template>
          </ul>
        </section>
      </main>
      );
}

export default Main;