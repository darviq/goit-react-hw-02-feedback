import PropTypes from "prop-types";

const Statistics = ({state: {good, neutral, bad}, countTotalFeedback, countPositiveFeedbackPercentage}) => {
    return (
        <>
            <h2>Statistics</h2>
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {countTotalFeedback()}</p>
                <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
            </div>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    countTotalFeedback: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func,
};

export default Statistics;
