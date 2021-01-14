import React, {Component} from "react";
import FeedbackOptions from "./section/feedbackOptions/FeedbackOptions";
import Notification from "./section/notification/Notification";
import Section from "./section/Section";
import Statistics from "./section/statistics/Statistics";

class Feedbacks extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = e => {
        const feed = e.target.dataset.feed;
        this.setState(prevState => ({
            [feed]: prevState[feed] + 1,
        }));
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((100 / this.countTotalFeedback()) * this.state.good);
    };

    render() {
        return (
            <>
                <Section title="Please, leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
                    {this.countTotalFeedback() > 0 ? (
                        <Statistics state={this.state} countTotalFeedback={this.countTotalFeedback} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </>
        );
    }
}

export default Feedbacks;
