import { Component } from 'react';
import { PleseLeave } from './PleseLeave/PleseLeave';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from 'GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  responseUsers = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  coefficientPositive = ({ good, neutral, bad }) => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / this.totalFeedback(this.state));
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <PleseLeave
          colors={this.colors}
          title="Please leave feedback"
          options={Object.keys(this.state)}
          onResponse={this.responseUsers}
        />
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.totalFeedback(this.state)}
          coefficientPositive={this.coefficientPositive(this.state)}
        />
        <GlobalStyle />
      </div>
    );
  }
}
