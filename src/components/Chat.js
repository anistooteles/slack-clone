import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Message from '../components/Message';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';

function Chat() {
  return (
    <div className="chat__container">
      <div className="chat__header">
        <div className="chat__channel-desc">
          <div className="chat__name">#channel</div>
          <div className="chat__description">description</div>
        </div>
        <div className="chat__channel-details">
          <div className="chat__details-icon">Details</div>
          <div className="chat__details-icon">
            <InfoIcon></InfoIcon>
          </div>
        </div>
      </div>
      <div className="chat__body">
        <Message
          img="https://i.imgur.com/9pNffkj.png"
          text="¡hola! :) ¿COMPRENDE? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          name="@ani"
          date="31-12-9999 01:00:00 am"
        ></Message>
        <Message
          img="https://i.imgur.com/9pNffkj.png"
          text="¡hola! :) ¿COMPRENDE? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          name="@ani"
          date="31-12-9999 01:00:00 am"
        ></Message>
      </div>
      <div className="chat__message">
        <form className="chat__msg-box">
          <input type="text" placeholder="Message..."></input>
          <div className="chat__buttons">
            <Button className="chat__sent-button" aria-label="delete">
              <FormatColorTextIcon fontSize="inherit"></FormatColorTextIcon>
            </Button>
            <Button className="chat__sent-button" aria-label="delete">
              <AlternateEmailIcon fontSize="inherit"></AlternateEmailIcon>
            </Button>
            <Button className="chat__sent-button" aria-label="delete">
              <InsertEmoticonIcon fontSize="inherit"></InsertEmoticonIcon>
            </Button>
            <Button className="chat__sent-button" aria-label="delete">
              <AttachmentIcon fontSize="inherit"></AttachmentIcon>
            </Button>

            <Button className="chat__sent-button" aria-label="delete">
              <SendIcon fontSize="inherit"></SendIcon>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
