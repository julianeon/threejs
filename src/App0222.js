import React from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Splash from './Splash';
import GreenCubesBlue from './GreenCubesBlue';
import YellowConeRed from './YellowConeRed';
import Torus from './Torus';
import Diamonds from './Diamonds';
import DiamondSeries from './DiamondSeries';
import Cylinder from './Cylinder';
import Ring from './Ring';
import Lathe from './Lathe';
import Tube from './Tube';
import ShapeHeart from './ShapeHeart';

function App() {
  return (
    <Router>
      <div>
         <Switch>
          <Route path="/gcb">
          <GreenCubesBlue />
          </Route>
          <Route path="/ycnr">
          <YellowConeRed />
          </Route>
          <Route path="/torus">
          <Torus />
          </Route>
          <Route path="/diamonds">
          <Diamonds />
          </Route>
          <Route path="/cylinder">
          <Cylinder />
          </Route>
          <Route path="/ring">
          <Ring />
          </Route>
          <Route path="/diamondseries">
          <DiamondSeries />
          </Route>
          <Route path="/heart">
          <ShapeHeart />
          </Route>
          <Route path="/lathe">
          <Lathe />
          </Route>
          <Route path="/tube">
          <Tube />
          </Route>
          <Route path="/">
          <Splash />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App;
