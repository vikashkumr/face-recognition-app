import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
  apiKey: '7ac54e5dec2e4a7b9218ca9f55c2cb91'
 });
const particlesOption = {
  Particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
}
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }
  calculateFaceLocation = (data) => {

  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input).then(response => this.calculateFaceLocation(response)
    .catch(err => console.log(err))
  );
  }
  render() {
    return (
      <div className="App">
       <Particles className='particles'
        params={particlesOption} />
        <Navigation />
         <Logo />
         <Rank /> 
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
