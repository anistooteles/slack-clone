import React from 'react';
import MessageIcon from '@material-ui/icons/Message';
import { sidebarItems } from './SidebarData';
import SidebarItem from './SidebarItem';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useHistory } from 'react-router-dom';

function Sidebar({ colorTheme, rooms }) {
  const addChannel = () => {
    const promptName = prompt('Enter channel name');
    //console.log(rooms);
    if (promptName) {
      db.collection('rooms').add({ name: promptName });
    }
  };

  const history = useHistory();

  const goToChannel = item => {
    if (item.id) {
      console.log(item.id);
      history.push(`/room/${item.id}`);
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
          <SidebarItem
            item={item}
            colorTheme={colorTheme}
            key={index}
            onClick={() => goToChannel(item)}
          />
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

      {rooms.map(item => (
        <SidebarItem
          onClick={() => goToChannel(item)}
          item={item}
          colorTheme={colorTheme}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Sidebar;
