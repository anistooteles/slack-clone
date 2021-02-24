import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({
    secondary: false,
  });

  const themeHandler = e => {
    //console.log(e);
    setState({ secondary: e });
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
            <Switch>
              <Route path="/">
                <Sidebar colorTheme={state.secondary}></Sidebar>
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
