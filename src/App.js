import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/navigation";
import Uber from "./uber.png";
import Lyft from "./lyft.png";
import Sidecar from "./sidecar.png";
import Map from "./map.jpg";
import { Parallax, Background } from 'react-parallax';

const App = () => (


  <Router>
    <div>
      <Route exact path="/" component={homeWindow} />
      <Route path="/transportation" component={transportWindow} />
      <Route path="/food" component={foodWindow} />
      <Route path="/attractions" component={attractionWindow} />
      <Route path="/dresscode" component={dressWindow} />
      <Route path="/maps" component={mapsWindows} />
    </div>
  </Router>
);


const homeWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
  </div>
);

const transportWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
    <Parallax blur={10} bgImage={require('./taxi.jpg')} bgImageAlt="map" strength={200}>
           <div class="box">
            <h1>Transportation</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
  </div>
);

const foodWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
    <Parallax blur={10} bgImage={require('./pizza.jpeg')} bgImageAlt="map" strength={200}>
           <div class="box">
            <h1>Food</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
  </div>
);

const attractionWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
    <Parallax blur={10} bgImage={require('./whitehouse.JPG')} bgImageAlt="map" strength={200}>
           <div class="box">
            <h1>Attractions</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
  </div>
);

const dressWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
    <Parallax blur={10} bgImage={require('./suit.jpg')} bgImageAlt="map" strength={200}>
           <div class="box">
            <h1>Dress Code</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
  </div>
);

const mapsWindows = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
    <Parallax blur={10} bgImage={require('./map.jpg')} bgImageAlt="map" strength={200}>
           <div class="box">
            <h1>Maps</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
    <br/>
    <br/>
    <h2>The Hotel:</h2>
    <p> This years National Convention will be held at the Gaylord Palms Resort in Washington DC. Use the following interactive map to explore the surrounding area.</p>
    <iframe class="hotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.226301767285!2d-77.01896208465307!3d38.78144617958869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0734d793d5d%3A0x7fccb753cbe0c4f7!2sGaylord+National+Resort+%26+Convention+Center%2C+Fort+Washington%2C+MD+20745!5e0!3m2!1sen!2sus!4v1541349162518" allowfullscreen></iframe>
    <br/>
    <br/>
    <hr/>

  </div>
);


export default App;
