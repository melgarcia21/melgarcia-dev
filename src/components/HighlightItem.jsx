

import PropTypes from 'prop-types';

const HighlightItem = ({ image, category, date, dateFormatted, title, text }) => {
  return (
    <li className="highlights-post-item">
      <a href="#">
        <figure className="highlights-banner-box">
          <img src={image} alt={title} loading="lazy" />
        </figure>

        <div className="highlights-content">
          <div className="highlights-meta">
            <p className="highlights-category">{category}</p>
            <span className="dot"></span>
            <time dateTime={date}>{dateFormatted}</time>
          </div>

          <h3 className="h3 highlights-item-title">{title}</h3>
          <p className="highlights-text">{text}</p>
        </div>
      </a>
    </li>
  );
};

HighlightItem.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string,
  date: PropTypes.string,
  dateFormatted: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HighlightItem;
