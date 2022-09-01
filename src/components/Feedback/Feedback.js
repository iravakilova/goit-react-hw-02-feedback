import { Component } from 'react';
import { Box } from 'components/Box';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickOnBtn = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, feedback) => {
      return previousValue + feedback;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return `${
      Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0
    }%`;
  };

  render() {
    return (
      <Box display="flex" flexDirection="column">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.clickOnBtn}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedbacks={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
