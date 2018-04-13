import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="anchor-line"></div>
        <div className="content">
          <div className="aligned-content">
            <h1>Hej.</h1>
            <p>I'm Joakim Wimmerstedt and I’m a developer based in Stockholm.<br />By day I work at SBAB as a fullstack developer. I’m a Hyper Island graduate<br />with a background in advertising and I’ve previously done work for clients<br />such as Samsung, WWF, Nike and Swish.</p>
            <p>Currently doing some deep diving in Elixir, React Native and Pizza 🍕</p>
            <h2>Experience</h2>
            <ul>
              <li>Fullstack Developer<span>SBAB, 2018—</span></li>
              <li>Fullstack Developer<span>Mobility46, 2016—18</span></li>
              <li>Freelance Developer<span>Self-employed, 2015—16</span></li>
              <li>Frontend Developer<span>The World Loves, 2014—15</span></li>
              <li>Frontend Developer<span>River, 2013—14</span></li>
            </ul>
            <a href="https://github.com/cupofjoakim/">github</a>
            <a href="https://twitter.com/cupofjoakim">twitter</a>
            <a href="https://www.linkedin.com/in/joakimwimmerstedt/">linkedin</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
