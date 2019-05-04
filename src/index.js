import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <main>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editindasd to s some magic happen!ds</h2>
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
