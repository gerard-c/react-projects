import React, { useState } from 'react';
import { links } from './data'

const Sidebar = ({ showLinks }) => {
  
  return (
    <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;