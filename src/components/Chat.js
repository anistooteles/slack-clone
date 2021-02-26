import React, { useEffect, useState, useRef } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Message from '../components/Message';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';

function Chat({ user }) {
  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });

  let { channelId } = useParams();

  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState('');

  const sendMessage = e => {
    e.preventDefault();

    if (channelId) {
      let payload = {
        text: input,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo,
      };
      if (input !== '')
        db.collection('rooms')
          .doc(channelId)
          .collection('messages')
          .add(payload);
      //console.log(payload);
      setInput('');
      executeScroll();
    }
  };

  const getMessages = () => {
    db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        let messages = snapshot.docs.map(doc => doc.data());
        setMessages(messages);
        console.log(messages);
      });
  };

  //getMessages();

  const getChannel = () => {
    console.log('ID:', channelId);
    db.collection('rooms')
      .doc(channelId)
      .onSnapshot(snapshot => {
        console.log('CHANNEL:', snapshot.data());
        setChannel(snapshot.data());
      });
  };

  useEffect(() => {
    console.log('ID:', channelId);
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <div className="chat__container">
      <div className="chat__header">
        <div className="chat__channel-desc">
          <div className="chat__name">#{channel && channel.name}</div>
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
        {messages.map((message, index) => (
          <Message
            img={message.userImage}
            text={message.text}
            name={message.user}
            date={new Date(message.timestamp.toDate()).toUTCString()}
            key={index}
          ></Message>
        ))}
        <span ref={myRef}></span>
      </div>
      <div className="chat__message">
        <form className="chat__msg-box">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="Message..."
          ></input>
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

            <Button
              disabled={input === ''}
              onClick={e => sendMessage(e)}
              className="chat__sent-button"
              aria-label="delete"
              type="submit"
            >
              <SendIcon fontSize="inherit"></SendIcon>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
