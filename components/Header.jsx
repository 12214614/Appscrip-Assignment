import "../styles/header.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      
      {/* Top bar */}
      <div className="top-bar">
        <p>Lorem ipsum dolor</p>
      </div>

      {/* Main navbar */}
      <div className="navbar">

        {/* Left (empty or logo small) */}
        <div className="nav-left"></div>

        {/* Center Logo */}
        <div className="logo">
          LOGO
        </div>

        {/* Right Icons */}
        <div className="nav-icons">
          <Image src="/icon/search.svg" alt="search" width={20} height={20} />
          <Image src="/icon/heart.svg" alt="heart" width={20} height={20} />
          <Image src="/icon/shopping-bag.svg" alt="cart" width={20} height={20} />
          <Image src="/icon/user.svg" alt="user" width={20} height={20} />
          <span className="lang">ENG</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="menu">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

    </header>
  );
}