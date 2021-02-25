import React from 'react';
import MessageIcon from '@material-ui/icons/Message';
import { sidebarItems } from './SidebarData';
import SidebarItem from './SidebarItem';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';

function Sidebar({ colorTheme, rooms }) {
  const addChannel = () => {
    const promptName = prompt('Enter channel name');
    console.log(promptName);
    if (promptName) {
      db.collection('rooms').add({ name: promptName });
    }
  };

  return (
    <div
      className={
        colorTheme ? 'sidebar sidebar--alternate' : 'sidebar sidebar--primary'
      }
    >
      <div className="sidebar__new-message">
        <div className="sidebar__name">anistooteles</div>
        <div
          className={
            colorTheme
              ? 'sidebar__message sidebar__message--alternate'
              : 'sidebar__message'
          }
        >
          <MessageIcon></MessageIcon>
        </div>
      </div>
      <div className="sidebar__menu">
        {sidebarItems.map((item, index) => (
          <SidebarItem item={item} colorTheme={colorTheme} key={index} />
        ))}
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__name">Channels</div>
        <div
          className={
            colorTheme
              ? 'sidebar__message sidebar__message--alternate'
              : 'sidebar__message'
          }
        >
          <AddIcon onClick={addChannel}></AddIcon>
        </div>
      </div>
      {console.log(rooms)}
      {rooms.map(item => (
        <SidebarItem item={item} colorTheme={colorTheme} key={item.id} />
      ))}
    </div>
  );
}

export default Sidebar;
