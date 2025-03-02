

import PropTypes from 'prop-types';

const ServiceItem = ({ icon, title, text }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={icon} alt={`${title} icon`} width="40" />
      </div>

      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">
          {text}
        </p>
      </div>
    </li>
  );
};

ServiceItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServiceItem;