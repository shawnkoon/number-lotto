import * as React from 'react';
import questionBox from '../../assets/static/question_box.gif';

// Component
import { Main } from './components/Main';

export class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPercentage: 0,
      boostPercentage: 63,
    };
  }

  render() {
    return (
      <Main
        image={questionBox}
        currentPercentage={this.state.currentPercentage}
        boostPercentage={this.state.boostPercentage}
      />
    );
  }


}
