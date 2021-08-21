import './App.css';
import EmojiInterpreter from './emojiInterpreter';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './navbar';
import HomePage from './Home';
import Footer from './footer';
import Movie from './movie';
function App() {
  return(
    <Router>
    <div className="App">
        
        <Header />

        <Switch>
          <Route path="/" exact={true}><HomePage /></Route>
          <Route path="/emoji-Interpreter" exact={true}><EmojiInterpreter /></Route>
          <Route path="/movie-recommendation" exact={true}><Movie /></Route>

        </Switch>
        
        {/* <Footer /> */}
    

     
      
    </div>
    </Router>
  )
}

export default App;
