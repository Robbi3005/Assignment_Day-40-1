import React from "react";
import "./App.css";
import GetSection from "./components/GetSection/view";
import PostSection from "./components/PostSection/view";
import CatFact from "./components/Cat/CatFact.js";

//---------------------------------------------------------------------------------------------------------------------

function App() {
  return (

    <div id="app" className="container my-3">

      <h3 data-testid="text">React Axios example - netlify</h3>

      <GetSection />

      <PostSection />

      <CatFact />

    </div>
  );
}

//-

export default App;