function Card({card, onCardClick}) {

    const handleCardClick = () => {
        onCardClick(card);
    };

    return (
        <li className="places__item">
                <figure className="places__image-wrapper">
                  <img 
                  src={card.link}
                  alt={card.name}
                  className="places__image"
                  onClick={handleCardClick}
                  />
                  <figcaption className="places__discription">
                    <p className="places__text">{card.name}</p>
                    <div className="places__wrapper-like">
                      <button
                      type="button"
                      className="places__button-like"
                      aria-label="кнопка лайка"
                    ></button>
                    <p className="places__like-counter">{card.likes.length}</p>
                  </div>
                  </figcaption>
                  <button
                    type="button"
                    className="places__button-trash"
                    aria-label="кнопка удаления"
                  ></button>
                </figure>
              </li>
    );
}

export default Card;