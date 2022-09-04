import React, { useState } from "react";

import "./styles.css";

var emojiDictionary = {
  "🌻": "sunflower",
  "🌸": "cherry blossom",
  "🌹": "rose",
  "🌷": "tulip",
  "🌺": "hibiscus",
  "🌼": "daisy",
  "😂": "laughing",
  "😍": "Smiling Face with Heart-Eyes"
};
var emojisWeKnow = Object.keys(emojiDictionary);
var headingText = "inside outt!";
var color = "pink";

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    console.log(userInput);

    if (meaning === undefined) meaning = "We don't have this in our database!";
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText} </h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: " 2rem", padding: "0.5 rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
