import React from 'react';
import './headerStyle.css';

function Header() {
  return (
    document.body.style = 'background: #2193b0;',
    <header>
       <h1 className = 'headline'>Weather Today!</h1>
    </header>
  );
}

export default Header;
