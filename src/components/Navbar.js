import React from 'react';

const Navbar = () => {
  return (
    <nav className='navContainer'>
      <div className='navWrap'>
        <div className='menu-wrap'>
          <ul className='menu'>
            <li className='menu-item'>
              <button>Pages</button>
              <ul className='drop-menu'>
                <li className='drop-menu-item'>
                  <span>Page 1</span>
                </li>
                <li className='drop-menu-item'>
                  <span>Page 2</span>
                </li>
                <li className='drop-menu-item'>
                  <span>Page 3</span>
                </li>
              </ul>
            </li>
            <li className='menu-item'>
              <button>Pages</button>
              <ul className='drop-menu'>
                <li className='drop-menu-item'>
                  <span>Page 1</span>
                </li>
                <li className='drop-menu-item'>
                  <span>Page 2</span>
                </li>
                <li className='drop-menu-item'>
                  <span>Page 3</span>
                </li>
              </ul>
            </li>
            <li className='menu-item'>
              <button>Pages</button>
              <ul className='drop-menu'>
                <li className='drop-menu-item'>
                  <span>Page 1</span>
                </li>
                <li className='drop-menu-item'>
                  <span>Page 2</span>
                </li>
                <li className='drop-menu-item'>
                  <span>Page 3</span>
                </li>
              </ul>
            </li>
            <li className='menu-item'>
              <button>Pages</button>
              <ul className='drop-menu'>
                <li className='drop-menu-item'>
                  <span>Page 1</span>
                </li>
                <li className='drop-menu-item'>
                  <span>Page 2</span>
                </li>
                <li className='drop-menu-item'>
                  <span>Page 3</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
