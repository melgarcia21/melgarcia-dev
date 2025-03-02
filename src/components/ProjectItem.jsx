import PropTypes from 'prop-types';

const ProjectItem = ({ title, category, image, active }) => {
  return (
    <li 
      className={`project-item ${active ? 'active' : ''}`} 
      data-filter-item 
      data-category={category}
    >
      <a href="#">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src={image} alt={title} loading="lazy" />
        </figure>

        <h3 className="project-title">{title}</h3>

        <p className="project-category">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
      </a>
    </li>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default ProjectItem;