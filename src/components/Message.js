import React from 'react';

function Message({ img, text, name, date }) {
  return (
    <div className="message__container">
      <img className="message__img" src={img}></img>
      <div className="message__info">
        <span className="message__name">{name}</span>
        <span className="message__date">{date}</span>
      </div>

      <span className="message__text">{text}</span>
    </div>
  );
}

export default Message;
