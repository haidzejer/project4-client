import React, { Component } from 'react';
import map from './map.png';
import chat_screen from './chat_screen.png';
import './App.css';


export default class HomePartial extends Component {
  render() {
    return (
      <div className="homeView">

        <div className="feature">
          <h2>Find Nearby Otakus</h2>
          <div className="featureHalf"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
          <div className="featureHalf"><img alt="" src={map}/></div>
        </div>

        <div className="feature">
          <h2>Send a chat request</h2>
          <div className="featureHalf"><img alt="" src={chat_screen}/></div>
          <div className="featureHalf"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
        </div>

      </div>

    )
  }
}
