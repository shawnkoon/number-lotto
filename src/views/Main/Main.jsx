import * as React from 'react';
import questionBox from '../../assets/static/question_box.gif';
import number_0_image from '../../assets/static/number_0.png';
import number_1_image from '../../assets/static/number_1.png';
import number_2_image from '../../assets/static/number_2.png';
import number_3_image from '../../assets/static/number_3.png';
import number_4_image from '../../assets/static/number_4.png';
import number_5_image from '../../assets/static/number_5.png';
import number_6_image from '../../assets/static/number_6.png';
import number_7_image from '../../assets/static/number_7.png';
import number_8_image from '../../assets/static/number_8.png';
import number_9_image from '../../assets/static/number_9.png';

// Component
import { Main } from './components/Main';
import { ProgressBars } from './components/ProgressBars';

let PERCENT_INTERVAL;
const MAX_BOOST_VALUE = 200;

export class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPercentage: 0,
      boostPercentage: 0,
      isRunning: false,
      currentImage: questionBox,
    };
    
    this.onGoClick = this.onGoClick.bind(this);
    this.onBoostClick = this.onBoostClick.bind(this);
  }

  render() {
    return (
      <Main
        isRunning={this.state.isRunning}
        image={this.state.currentImage}
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
    this.setState({
      currentPercentage: 0,
      currentImage: questionBox,
      boostPercentage: 0,
      isRunning : true 
    });
    
    PERCENT_INTERVAL = setInterval(() => {
      if (this.state.currentPercentage < 100) {
        this.setState({ currentPercentage: this.state.currentPercentage + 1 });
      } else {
        clearInterval(PERCENT_INTERVAL);
        this.setState({ currentImage: this.getRandomImage(this.state.boostPercentage) })
        this.setState({ isRunning: false })
      }
    }, 200);
  }

  onBoostClick(e) {
    e.preventDefault();
    if (this.state.boostPercentage < MAX_BOOST_VALUE) {
      this.setState({ boostPercentage: this.state.boostPercentage + 1 });
    }
  }

  getRandomImage(boostValue) {
    let randomNumber = Math.floor(Math.random() * 10);

    if (boostValue > MAX_BOOST_VALUE * .75) {
      randomNumber = randomNumber + 3 > 9 ? 9 : randomNumber + 3;
    } else if (boostValue > MAX_BOOST_VALUE * .5) {
      randomNumber = randomNumber + 2 > 9 ? 9 : randomNumber + 2;
    } else if (boostValue > MAX_BOOST_VALUE * .25) {
      randomNumber = randomNumber + 1 > 9 ? 9 : randomNumber + 1;
    } else {
      alert('Do you even boost?! I give you -1 :( ');
      randomNumber = randomNumber - 1 < 0 ? 0 : randomNumber - 1;
    }

    if (randomNumber === 0) {
      return number_0_image;
    } else if (randomNumber === 1) {
      return number_1_image;
    } else if (randomNumber === 2) {
      return number_2_image;
    } else if (randomNumber === 3) {
      return number_3_image;
    } else if (randomNumber === 4) {
      return number_4_image;
    } else if (randomNumber === 5) {
      return number_5_image;
    } else if (randomNumber === 6) {
      return number_6_image;
    } else if (randomNumber === 7) {
      return number_7_image;
    } else if (randomNumber === 8) {
      return number_8_image;
    }

    return number_9_image;
  }
}
