import * as React from 'react';
import questionBox from '../../assets/static/question_box.gif';

// Component
import { Main } from './components/Main';

let percentageInterval;

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
        { ...this.state }
        image={questionBox}
        onGoClick={this.onGoClick}
        onBoostClick={this.onBoostClick}
      />
    );
  }

  onGoClick(e) {
    e.preventDefault();
    this.setState({ currentPercentage: 0, boostPercentage: 0, isRunning : true });

    percentageInterval = setInterval(() => {
      if (this.state.currentPercentage < 100) {
        this.setState({ currentPercentage: this.state.currentPercentage + 1 });
      } else {
        clearInterval(percentageInterval);
        this.setState({ isRunning: false })
      }
    }, 300);
  }

  onBoostClick(e) {
    e.preventDefault();
    this.setState({ boostPercentage: this.state.boostPercentage + 1 });
  }
}
