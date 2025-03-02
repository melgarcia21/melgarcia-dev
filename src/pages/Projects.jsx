import { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../components/ProjectItem';

const Projects = ({ active }) => {
  const [filter, setFilter] = useState('all');
  const [selectOpen, setSelectOpen] = useState(false);

  const filters = ['all', 'websites', 'apps', 'designs'];

  const projects = [
    {
      title: "Finance",
      category: "designs",
      image: "./images/project-1.jpg"
    },
    {
      title: "Orizon",
      category: "designs",
      image: "./images/project-2.png"
    },
    {
      title: "Fundo",
      category: "websites",
      image: "./images/project-3.jpg"
    },
    {
      title: "Brawlhalla",
      category: "apps",
      image: "./images/project-4.png"
    },
    {
      title: "DSM.",
      category: "websites",
      image: "./images/project-5.png"
    },
    {
      title: "Task Manager",
      category: "apps",
      image: "./images/project-8.jpg"
    }
  ];

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setSelectOpen(false);
  };

  const toggleSelect = () => {
    setSelectOpen(!selectOpen);
  };

  return (
    <article className={`projects ${active ? 'active' : ''}`} data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filters.map((filterItem, index) => (
            <li key={index} className="filter-item">
              <button 
                className={filter === filterItem ? 'active' : ''} 
                data-filter-btn
                onClick={() => setFilter(filterItem)}
              >
                {filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button 
            className="filter-select" 
            data-select
            onClick={toggleSelect}
          >
            <div className="select-value" data-selecct-value>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={`select-list ${selectOpen ? 'active' : ''}`}>
            {filters.map((filterItem, index) => (
              <li key={index} className="select-item">
                <button 
                  data-select-item
                  onClick={() => handleFilterChange(filterItem)}
                >
                  {filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {projects.map((project, index) => (
            <ProjectItem 
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              active={filter === 'all' || filter === project.category}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};
Projects.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Projects;