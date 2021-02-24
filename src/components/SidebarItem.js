import React from 'react';

function SidebarItem({ item, colorTheme }) {
  return (
    <div
      className={
        colorTheme
          ? 'sidebar-item sidebar-item--alternate'
          : 'sidebar-item sidebar-item'
      }
    >
      {item.icon && <div className="sidebar-item__icon">{item.icon}</div>}
      <div>{item.text}</div>
    </div>
  );
}

export default SidebarItem;
