import React, { useState } from "react";
import "./styles.css";
// var username = "laxmikanth";
// var color = "red";
// var i = 1;
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😴": "sleeping",
  "❤️": "love",
  "😑": "annoyance"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [disp, setdisp] = useState("");

  function emojiInputHandler(event) {
    var userValue = event.target.value;

    var disp = emojiDictionary[userValue];

    if (disp === undefined) {
      disp = "This is not available in our DB";
    }
    setdisp(disp);
  }

  function emojiClickHandler(emoji) {
    var disp = emojiDictionary[emoji];
    setdisp(disp);
  }
  return (
    <div className="App">
      <h1>REACTicons</h1>

      <input onChange={emojiInputHandler} />

      <h2> {disp} </h2>

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
