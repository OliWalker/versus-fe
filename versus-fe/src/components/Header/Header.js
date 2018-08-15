import React from 'react';
import './Header.css';
import Drawer from '../Drawer/Drawer';

const openDrawer = e => {
  let x = document.querySelector('.Header__drawer');

  if (e.target.classList.contains('Header__hamburger__open')) {
    e.target.classList.remove('Header__hamburger__open');
    x.classList.remove('Header__drawer__open');
  } else {
    e.target.classList.add('Header__hamburger__open');
    x.classList.add('Header__drawer__open');
  }
};

export default function Header() {
  return (
    <div className="Header">
      <div className="Header__drawer">
        <Drawer />
      </div>

      <i className="fas fa-bars Header__hamburger" onClick={openDrawer} />
    </div>
  );
}
