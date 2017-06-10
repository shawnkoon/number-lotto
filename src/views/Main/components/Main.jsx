import * as React from 'react';
import logo from '../../../assets/static/shawnkoon-logo.png';

// Components
import {
  Button,
  Image,
} from 'react-bootstrap';

export const Main = (props) => (
  <div className="app">
    <Image src={logo}/>
    <div className="app-title">
      Welcome to shawnkoon-lotto
    </div>
    <div className="display">
      <Image src={props.image}/>
    </div>
    { props.children }
    <div className="button-group">
      <Button
        bsStyle="success"
        disabled={props.isRunning}
        onClick={props.onGoClick}
        block
      >
        Go!
      </Button>
      <br/>
      <Button
        bsStyle="danger"
        disabled={!props.isRunning}
        onClick={props.onBoostClick}
        block
      >
        BOOST
      </Button>
    </div>
  </div>
);
