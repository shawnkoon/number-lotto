import * as React from 'react';

// Components
import { ProgressBar } from 'react-bootstrap';

export const ProgressBars = (props) => (
  <div className="progress-group">
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
      label={`${props.boostPercentage / (props.boostMaxValue / 100)}%`}
      min={0}
      max={props.boostMaxValue}
    />
  </div>
);
