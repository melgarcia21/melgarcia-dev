import TimelineItem from './TimelineItem';
import PropTypes from 'prop-types';

const TimelineSection = ({ title, icon, items }) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name={icon}></ion-icon>
        </div>
        <h3 className="h3">{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item, index) => (
          <TimelineItem 
            key={index}
            title={item.title}
            period={item.period}
            description={item.description}
          />
        ))}
      </ol>
    </section>
  );
};

TimelineSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TimelineSection;