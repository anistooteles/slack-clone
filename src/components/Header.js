import React, { useState } from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Switch from '@material-ui/core/Switch';

function Header({ onChangeTheme, colorTheme, user, signOut }) {
  //console.log(signOut);
  return (
    <div
      className={
        colorTheme ? 'header header--alternate' : 'header header--primary'
      }
    >
      <div className="header__searcher">
        <div className="header__icon-button">
          <AccessTimeIcon></AccessTimeIcon>
        </div>
        <div className="header__search">
          <input
            placeholder="Search..."
            className={colorTheme ? 'alternate' : ''}
          ></input>
        </div>
        <div className="header__icon-button">
          <HelpOutlineIcon></HelpOutlineIcon>
        </div>
      </div>
      <div className="header__profile">
        <Switch
          color="default"
          onChange={e => {
            onChangeTheme(e.target.checked);
          }}
        ></Switch>
        <span className="header__text">{user.name}</span>

        <img
          onClick={signOut}
          className="header__user-img"
          src={user.photo ? user.photo : "'https://i.imgur.com/9pNffkj.png'"}
        ></img>
      </div>
    </div>
  );
}

export default Header;
