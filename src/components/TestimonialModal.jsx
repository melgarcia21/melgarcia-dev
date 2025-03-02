

import PropTypes from 'prop-types';

const TestimonialModal = ({ data, active, onClose }) => {
  return (
    <div className={`modal-container ${active ? 'active' : ''}`} data-modal-container>
      <div className="overlay" data-overlay onClick={onClose}></div>

      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img 
              src={data.avatar} 
              alt={data.name} 
              width="80" 
              data-modal-img 
            />
          </figure>

          <img src="./images/icon-quote.svg" alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {data.name}
          </h4>

          <time dateTime="2021-06-14">14 June, 2021</time>

          <div data-modal-text>
            <p>{data.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

TestimonialModal.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TestimonialModal;
