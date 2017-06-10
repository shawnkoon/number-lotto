import * as React from 'react';
import questionBox from '../../assets/static/question_box.gif';

// Component
import { Main } from './components/Main';
import { ProgressBars } from './components/ProgressBars';

let PERCENT_INTERVAL;
const MAX_BOOST_VALUE = 250;

export class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPercentage: 0,
      boostPercentage: 0,
      isRunning: false,
    };
    
    this.onGoClick = this.onGoClick.bind(this);
    this.onBoostClick = this.onBoostClick.bind(this);
  }

  render() {
    return (
      <Main
        isRunning={this.state.isRunning}
        image={questionBox}
        onGoClick={this.onGoClick}
        onBoostClick={this.onBoostClick}
      >
        <ProgressBars
          currentPercentage={this.state.currentPercentage}
          boostPercentage={this.state.boostPercentage}
          boostMaxValue={MAX_BOOST_VALUE}
        />
      </Main>
    );
  }

  onGoClick(e) {
    e.preventDefault();
    this.setState({ currentPercentage: 0, boostPercentage: 0, isRunning : true });

    PERCENT_INTERVAL = setInterval(() => {
      if (this.state.currentPercentage < 100) {
        this.setState({ currentPercentage: this.state.currentPercentage + 1 });
      } else {
        clearInterval(PERCENT_INTERVAL);
        this.setState({ isRunning: false })
      }
    }, 320);
  }

  onBoostClick(e) {
    e.preventDefault();
    if (this.state.boostPercentage < MAX_BOOST_VALUE) {
      this.setState({ boostPercentage: this.state.boostPercentage + 1 });
    }
  }
}
