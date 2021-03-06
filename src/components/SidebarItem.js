import React from 'react';

function SidebarItem({ item, colorTheme, onClick }) {
  return (
    <div
      onClick={() => {
        onClick(item);
      }}
      className={
        colorTheme
          ? 'sidebar-item sidebar-item--alternate'
          : 'sidebar-item sidebar-item'
      }
    >
      {item.icon && <div className="sidebar-item__icon">{item.icon}</div>}
      <div>
        {!item.icon && '#'}
        {item.name}
      </div>
    </div>
  );
}

export default SidebarItem;
