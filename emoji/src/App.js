import './App.css';
import EmojiInterpreter from './emojiInterpreter';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './navbar';
import HomePage from './Home';

function App() {
  return(
    <Router>
    <div className="App">

    <Header />
        
        
        <Switch>
          <Route path="/" exact={true}><HomePage /></Route>
          <Route path="/emojiInterpreter"><EmojiInterpreter /></Route>
        </Switch>


     
      
    </div>
    </Router>
  )
}

export default App;
