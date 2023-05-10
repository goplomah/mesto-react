import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { useEffect, useState } from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";
import api from "../utils/Api.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitCard()])
    .then(([me, cards]) => {
      setCurrentUser(me);
      setCards(cards);
    })
    .catch((err) =>
    console.log(`Упс...Ошибка получения данных с сервера: ${err}`)
  );
  }, [])

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  }).catch((err) =>
  console.log(`Упс...Ошибка получения данных с сервера: ${err}`)
);
  }

  const handleCardDelete = (card) => {
    api.removeCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    }).catch((err) =>
    console.log(`Упс...Ошибка получения данных с сервера: ${err}`)
  );
  }

  const handleUpdateUser = ({name, about}) => {
    api.setUserInfo({name, job: about}).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err) =>
    console.log(`Упс...Ошибка получения данных с сервера: ${err}`)
  );
  }

  const handleUpdateAvatar = ({avatar}) => {
    api.updateAvatar({avatar}).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err) =>
    console.log(`Упс...Ошибка получения данных с сервера: ${err}`)
  );
  }

  const handleAddPlaceSubmit = ({name, link}) => {
    api.addCard({title: name, link}).then((res) => {
      setCards([res, ...cards]);
      closeAllPopups();
    }).catch((err) =>
    console.log(`Упс...Ошибка получения данных с сервера: ${err}`)
  );
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onClose={closeAllPopups}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser}
        /> 
        <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup name="image" onClose={closeAllPopups} card={selectedCard} />
        <PopupWithForm
          name="delete"
          onClose={closeAllPopups}
          title="Вы уверены?"
          submitButtonText="Да"
        />
        <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
         />
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
