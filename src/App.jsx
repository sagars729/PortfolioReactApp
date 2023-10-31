/* eslint-disable react/no-unknown-property */
import React, { Component } from "react";
import Base from "./components/Base/Base";
import Landing from "./components/Landing/Landing";
import purple_space from "./components/Landing/assets/purple_space.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Base
        content={<Landing />}
        title="Sagar Saxena"
        links={
          <>
            <link
              href="https://fonts.googleapis.com/css?family=Arvo"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Open Sans"
              rel="stylesheet"
            />
            <meta
              prefix="og: http://ogp.me/ns#"
              property="og:title"
              content="Sagar Saxena"
            />
            <meta
              prefix="og: http://ogp.me/ns#"
              name="author"
              content="Sagar Saxena"
            />
            <meta
              prefix="og: http://ogp.me/ns#"
              property="og:type"
              content="Personal Website"
            />
            <meta
              prefix="og: http://ogp.me/ns#"
              property="og:description"
              content="My Personal Website"
            />
            <meta
              prefix="og: http://ogp.me/ns#"
              property="og:image"
              content={purple_space}
            />
            <meta
              prefix="og: http://ogp.me/ns#"
              property="og:url"
              content="/"
            />
          </>
        }
      />
    </div>
  );
}

export default App;
