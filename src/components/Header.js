import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" >
      <a href="#hero" className="logo">
        <img src="/media/logo.png" alt="Logo" />
      </a>

      <div className="header-name">
        <h1>Cannes Film, Content Creators Festival & Award ceremony</h1>
      </div>

      <nav className={`header-menu ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#jury" onClick={() => setMenuOpen(false)}>
          Jury
        </a>
        <a href="#schedule" onClick={() => setMenuOpen(false)}>
          Schedule
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
