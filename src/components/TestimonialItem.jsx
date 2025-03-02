

import PropTypes from 'prop-types';

const TestimonialItem = ({ avatar, name, text, onItemClick }) => {
  return (
    <li className="testimonials-item">
      <div className="content-card" data-testimonials-item onClick={onItemClick}>
        <figure className="testimonials-avatar-box">
          <img 
            src={avatar} 
            alt={name} 
            width="60" 
            data-testimonials-avatar 
          />
        </figure>

        <h4 className="h4 testimonials-item-title" data-testimonials-title>
          {name}
        </h4>

        <div className="testimonials-text" data-testimonials-text>
          <p>{text}</p>
        </div>
      </div>
    </li>
  );
};

TestimonialItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onItemClick: PropTypes.func
};

export default TestimonialItem;