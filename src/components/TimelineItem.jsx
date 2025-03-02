
import PropTypes from 'prop-types';


const TimelineItem = ({ title, period, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{period}</span>
      <p className="timeline-text">
        {description}
      </p>
    </li>
  );
};

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TimelineItem;