import * as React from 'react';

// Components
import {
  Button,
  Image,
  ProgressBar,
} from 'react-bootstrap';

export const Main = (props) => (
  <div className="app">
    <div className="app-title">
      Welcome to shawnkoon-lotto
    </div>
    <div className="display">
      <Image src={props.image} responsive />
    </div>
    <div className="gauge-group">
      <ProgressBar
        active
        bsStyle="success"
        now={props.currentPercentage}
        label={`${props.currentPercentage}%`}
      />
      <ProgressBar
        active
        bsStyle="danger"
        now={props.boostPercentage}
        label={`${props.boostPercentage / 3}%`}
        min={0}
        max={300}
      />
    </div>
    <div className="button-group">
      <Button
        bsStyle="success"
        disabled={props.isRunning}
        onClick={props.onGoClick}
        block
      >
        Go!
      </Button>
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
