import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import db from './firebase';
import { auth, provider } from './firebase';

function App() {
  useEffect(() => {
    console.log(state.rooms);
    getChannels();
  }, []);

  const [state, setState] = useState({
    secondary: false,
    rooms: [],
  });

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  console.log('user in App state', user);
  const themeHandler = e => {
    //console.log(e);
    setState({ ...state, secondary: e });
  };

  //const [rooms, setRooms] = useState([]);

  const getChannels = () => {
    db.collection('rooms').onSnapshot(snapshot => {
      setState({
        ...state,
        rooms: snapshot.docs.map(doc => {
          return { id: doc.id, name: doc.data().name };
        }),
      });
    });
  };

  const signOutHandler = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
      console.log('Sign put');
    });
  };

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser}></Login>
        ) : (
          <div className="container">
            <Header
              onChangeTheme={themeHandler}
              colorTheme={state.secondary}
              user={user}
              signOut={signOutHandler}
            ></Header>
            <div className="main">
              <Sidebar
                colorTheme={state.secondary}
                rooms={state.rooms}
              ></Sidebar>
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user}></Chat>
                </Route>
                <Route path="/">Select or Create Channel</Route>
              </Switch>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
