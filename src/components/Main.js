import { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitCard()])
      .then(([me, cards]) => {
        setUserName(me.name);
        setUserDescription(me.about);
        setUserAvatar(me.avatar);
        setCards(cards);
      })
      .catch((err) =>
        console.log(`Упс...Ошибка получения данных с сервера: ${err}`)
      );
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
            <img
              src={userAvatar}
              alt="аватар пользователя."
              className="profile__avatar"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="button-edit"
                onClick={onEditProfile}
                aria-label="кнопка редактирования"
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="button-add"
          aria-label="кнопка добавления карточки на страницу"
          onClick={onAddPlace}
        ></button>
      </section>
      <section
        className="places"
        aria-label="сетка карточек красивых мест России."
      >
        <ul className="places__cards">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
