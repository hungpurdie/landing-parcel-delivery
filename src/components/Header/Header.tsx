export default function Header() {
  return (
    <header className='header'>
      <div className='header__menu-wrap'>
        <h1 className='header__logo'>Besnik</h1>
        <ul className='header__menu'>
          <li className='header__menu-item'>Product</li>
          <li className='header__menu-item'>About Us</li>
          <li className='header__menu-item'>Features</li>
          <li className='header__menu-item'>Contact Us</li>
        </ul>
        <div className='header__btn-wrap'>
          <div className='header__btn-sign-in btn'>Sign In</div>
          <div className='header__btn-sign-up btn'>Sign Up</div>
        </div>
      </div>
    </header>
  );
}
