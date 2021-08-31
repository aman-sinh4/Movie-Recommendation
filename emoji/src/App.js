import './App.css';
import EmojiInterpreter from './emojiInterpreter';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './navbar';
import Movie from './movie';
import Books from './book';
function App() {
  return(
    <Router>
    <div className="App">
        
        <Header />

        <Switch>
          
          
          <Route path="/movie-recommendation" exact={true}><Movie /></Route>
          <Route path="/book-recommendation" exact={true}><Books /></Route>


        </Switch>
        <Route path="/" exact={true}><EmojiInterpreter /></Route>
        
       
    

     
      
    </div>
    </Router>
  )
}

export default App;
