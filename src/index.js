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
    console.log('init start button');
    el.addEventListener('mouseenter', function ()  {
      console.log('mouseenter start-button');
    });
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
        case 22: {
          document.querySelector("#ambientLight").setAttribute('intensity', '0.3');
          break;
        }
        case 31: {
          document.querySelector("#friends").emit(`showfriends`, null, false);
          break;
        }
        case 44: {
          document.querySelector("#friends").emit(`hidefriends`, null, false);
          break;
        }
        case 51: {
          document.querySelector("#doors").emit(`selldoors`, null, false);
          document.querySelector("#environment").setAttribute('visible', 'true');
          document.querySelector("#environment").setAttribute('environment', {preset: 'default'});
          document.querySelector("#ambientLight").setAttribute('intensity', '0')
          break;
        }
        case 55: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'egypt'});
          break;
        }
        case 56: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'arches'});
          break;
        }
        case 58: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'moon'});
          break;
        }
        case 61: {
          document.querySelector("#ceiling").setAttribute('visible', "false")
          break;
        }
        case 70: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'starry'});
          document.querySelector("#lights").setAttribute('visible', 'false')
          break;
        }
        case 77: {
          document.querySelector("#environment").setAttribute('environment', {preset: 'default'});
          document.querySelector("#lights").setAttribute('visible', 'true')
          break;
        }
        case 78: {
          document.querySelector("#calculator").setAttribute('visible', 'true');
          break;
        }
        case 79: {
          document.querySelector("#watch").setAttribute('visible', 'true');
          document.querySelector("#calculator").setAttribute('visible', 'false');
          break;
        }
        case 83: {
          document.querySelector("#internet").setAttribute('visible', 'true');
          document.querySelector("#watch").setAttribute('visible', 'false');
          break;
        }
        case 88: {
          document.querySelector("#browser").setAttribute('visible', 'true');
          document.querySelector("#internet").setAttribute('visible', 'false');
          break;
        }
        case 108: {
          document.querySelector("#browser").setAttribute('visible', 'false');
          document.querySelector("#jamming").setAttribute('visible', 'true');
          document.querySelector("#environment").setAttribute('environment', {preset: 'forest'});
          break;
        }
        case 147: {
          document.querySelector("#jamming").setAttribute('visible', 'false');
          document.querySelector("#environment").setAttribute('environment', {preset: 'default'});
          break;
        }
        case 154: {
          document.querySelector("#coins").setAttribute('visible', 'true');
          break;
        }
        case 156: {
          document.querySelector("#coins").setAttribute('visible', 'false');
          document.querySelector("#question").setAttribute('visible', 'true');
          break;
        }
        case 172: {
          document.querySelector("#question").setAttribute('visible', 'false');
          document.querySelector("#facebook").setAttribute('visible', 'true');
          break;
        }
        case 175: {
          document.querySelector("#facebook").setAttribute('visible', 'false');
          document.querySelector("#millions").setAttribute('visible', 'true');
          break;
        }
        case 196: {
          document.querySelector("#millions").setAttribute('visible', 'false');
          document.querySelector("#environment").setAttribute('environment', {preset: 'contact'});
          break;
        }
        case 203: {
          document.querySelector("#box1").setAttribute('visible', 'true');
          break;
        }
        case 206: {
          document.querySelector("#box1").setAttribute('visible', 'false');
          document.querySelector("#content").setAttribute('visible', 'true');
          break;
        }
        case 210: {
          document.querySelector("#box2").setAttribute('visible', 'true');
          document.querySelector("#content").setAttribute('visible', 'false');
          break;
        }
        case 215: {
          document.querySelector("#box2").setAttribute('visible', 'false');
          document.querySelector("#geolocation").setAttribute('visible', 'true');
          break;
        }
        case 221: {
          document.querySelector("#box3").setAttribute('visible', 'true');
          document.querySelector("#geolocation").setAttribute('visible', 'false');
          break;
        }
        case 223: {
          document.querySelector("#box3").setAttribute('visible', 'false');
          document.querySelector("#profile").setAttribute('visible', 'true');
          break;
        }
        case 229: {
          document.querySelector("#profile").setAttribute('visible', 'false');
          document.querySelector("#environment").setAttribute('environment', {preset: 'none'});
          document.querySelector("#ambientLight").setAttribute('intensity', '0.6');
          document.querySelector("#defaultSky").setAttribute('visible', 'true');
          break;
        }
        case 246: {
          document.querySelector("#floor").setAttribute('visible', 'false');
          break;
        }
        case 248: {
          document.querySelector("#lookup").setAttribute('visible', 'true');
          break;
        }
        case 262: {
          document.querySelector("#lookup").setAttribute('visible', 'false');
          document.querySelector("#ceiling").setAttribute('visible', 'true');
          document.querySelector("#defaultSky").setAttribute('visible', 'false');
          document.querySelector("#environment").setAttribute('environment', {preset: 'default'});
          document.querySelector("#ambientLight").setAttribute('intensity', '0.2');
          break;
        }
        case 263: {
          document.querySelector("#floor").setAttribute('visible', 'true');
          break;
        }
        case 264: {
          document.querySelector("#doors").setAttribute('visible', 'true');
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
