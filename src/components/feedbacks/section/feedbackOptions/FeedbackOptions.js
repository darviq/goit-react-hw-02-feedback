import PropTypes from "prop-types";

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <>
            <button type="button" onClick={onLeaveFeedback} data-feed="good">
                Good
            </button>
            <button type="button" onClick={onLeaveFeedback} data-feed="neutral">
                Neutral
            </button>
            <button type="button" onClick={onLeaveFeedback} data-feed="bad">
                Bad
            </button>
        </>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
