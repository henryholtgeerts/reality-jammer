import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'aframe';
import 'aframe-environment-component';
import 'super-hands';

window.sceneStarted = false;

window.AFRAME.registerComponent('start-button', {
  init: function() {
    const el = this.el;
    el.addEventListener('click', function () {
      el.setAttribute('visible', 'false');
      window.startScene();
    });
  }
})

window.startScene = () => {
    let currentTime = 0;
    const tck = () => {
      currentTime++;
      console.log(currentTime)
      switch ( currentTime ) {
        case 20: {
          document.querySelector("#friends").emit(`showfriends`, null, false);
          break;
        }
        case 33: {
          document.querySelector("#friends").emit(`hidefriends`, null, false);
          break;
        }
        case 39: {
          document.querySelector("#doors").emit(`selldoors`, null, false);
          document.querySelector("#environment").setAttribute('visible', 'true');
          document.querySelector("#environment").setAttribute('environment', {preset: 'default'});
          document.querySelector("#ambientLight").setAttribute('intensity', '0')
          break;
        }
        case 43: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'egypt'});
          break;
        }
        case 44: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'arches'});
          break;
        }
        case 46: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'moon'});
          break;
        }
        case 51: {
          document.querySelector("#ceiling").setAttribute('visible', "false")
          break;
        }
        case 58: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'starry'});
          document.querySelector("#lights").setAttribute('visible', 'false')
          break;
        }
        case 72: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'default'});
          document.querySelector("#lights").setAttribute('visible', 'true')
          break;
        }
      }
    }
    if (window.sceneStarted === false) {
      window.sceneStarted = true;
      setInterval(tck, 1000);
      var entity = document.querySelector('[sound]');
      console.log('entity', entity)
      entity.components.sound.playSound();
      console.log('sound', entity.components.sound)
    }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
