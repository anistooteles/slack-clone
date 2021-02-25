import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';
import db from './firebase';

function App() {
  useEffect(() => {
    console.log(state.rooms);
    getChannels();
  }, []);

  const [state, setState] = useState({
    secondary: false,
    rooms: [],
  });

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

  return (
    <div className="App">
      <div className="container">
        <Header
          onChangeTheme={themeHandler}
          colorTheme={state.secondary}
        ></Header>
        <div className="main">
          <Router>
            <Sidebar colorTheme={state.secondary} rooms={state.rooms}></Sidebar>
            <Switch>
              <Route path="/">
                <Chat></Chat>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
