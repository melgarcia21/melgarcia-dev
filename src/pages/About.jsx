import { useState } from 'react';
import PropTypes from 'prop-types';

import ServiceItem from '../components/ServiceItem';
import TestimonialItem from '../components/TestimonialItem';
import TestimonialModal from '../components/TestimonialModal';

const About = ({ active }) => {
  const [modalData, setModalData] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const services = [
    {
      icon: "./images/icon-dev.svg",
      title: "Website Development",
      text: "High-quality development of sites."
    },
    {
      icon: "./images/icon-app.svg", 
      title: "Mobile Application",
      text: "App Development for Android."
    },
    {
      icon: "./images/icon-design.svg",
      title: "Graphic Designs",
      text: "A high-quality graphic designs."
    },
    {
      icon: "./images/icon-video.svg",
      title: "Video Editing",
      text: "Video Editing & Content Creation"
    }
  ];

  const testimonials = [
    {
      avatar: "./images/avatar-1.png",
      name: "Client 1",
      text: "Testimonial Here"
    },
    {
      avatar: "./images/avatar-2.png",
      name: "Client 2",
      text: "Testimonial Here"
    }
  ];

  const openModal = (data) => {
    setModalData(data);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <article className={`about ${active ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I&apos;m a frontend developer
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">Services</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem 
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              text={testimonial.text}
              onItemClick={() => openModal(testimonial)}
            />
          ))}
        </ul>
      </section>

      {modalActive && modalData && (
        <TestimonialModal 
          data={modalData}
          active={modalActive}
          onClose={closeModal}
        />
      )}
    </article>
  );
};
About.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default About;