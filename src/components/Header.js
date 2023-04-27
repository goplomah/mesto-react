function Header() {
    return (
        <header className="header">
        <a href="https://goplomah.github.io/mesto/" className="header__link">
          <img
            src="<%=require('./images/header__logo.svg')%>"
            alt="логотип сайта место."
            className="header__logo"
          />
        </a>
      </header>
    );
}

export default Header;