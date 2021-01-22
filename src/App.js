import React from "react";
import "./App.css";
import Picture from "./components/picture.js"
import Date from "./components/date.js"
import Text from "./components/text.js"

function App() {
  return (
    <div className="App">
      <Date/>
      <Picture/>
      <Text/>
      <p>
        NASA Photo of the Day<span role="img" aria-label='go!'>🚀</span>
      </p>
    </div>
  );
}

export default App;
