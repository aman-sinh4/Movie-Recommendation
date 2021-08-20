import React, {useState} from 'react'
import './emojiInterpreter.css';

const emojiDictionary ={
    "🙂": "Smiling ",
    "😳": "Disbelief",
    "😔": "Sad",
    "😠": "Angry",
    "❤": "Love",
    "😑":"Annoyance",
    "😀":"Grinning Face"
  };
  
var emojisWeknow = Object.keys(emojiDictionary)

function EmojiInterpreter() {
    var[meaning,setMean]=useState(null)
  function emojiInputHandler(e){
    var userInput= e.target.value;
    var meaning = emojiDictionary[userInput];
    if(meaning===undefined && userInput.length!==0){
      meaning="We don't have this in our database";
    }
    setMean(meaning)
  
  }

  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setMean(meaning)
  }
  
  return (
    <div className="main">
      <h1 className="title"><img src="https://emojipedia.org/static/img/logo/emojipedia-logo-64.f24011dcde3f.png" alt="logo" /></h1>
      <input className="emojiInput" placeholder=" Search Emojis" onChange={emojiInputHandler} />
      <h3 className="meaning">{meaning} </h3>
      <h3 className="title2">Emojis we know</h3>
      
      {
        emojisWeknow.map(function (emoji){
          return <span 
          className="emoji"
          key={emoji}
          onClick={()=>emojiClickHandler(emoji)}>
            {emoji}
            </span>
        })
      }
      
    
    </div>
  );
}
export default EmojiInterpreter
