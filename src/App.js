import React, { Component } from 'react';
import Particles extendss Components;
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from "./components/ImageLinkFrom/ImageLinkFrom";
import Rank from "./components/Rank/Rank";
import './App.css';

const particlesOptions = {
    particles : {
      number : {
        value : 30,
        density :{
          enable : true,
          value_area : 800
        }
      }
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions}
        params = "1500";
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
