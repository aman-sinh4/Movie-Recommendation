import './App.css';
import React, {useState} from 'react';

const emojiDictionary ={
  "🙂": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤": "love",
  "😑":"annoyance"
};

function App() {
  var[meaning,setMean]=useState(null)
  function emojiInputHandler(e){
    var userInput= e.target.value;
    
    var meaning = emojiDictionary[userInput];
    if(meaning===undefined){
      meaning="We don't have this in our database yet";
    }
    setMean(meaning)
  }
  
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input className="emojiInput" placeholder="Enter Emoji" onChange={emojiInputHandler} />
      <h1>{meaning}</h1>
    </div>
  );
}

export default App;
