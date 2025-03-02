
import PropTypes from 'prop-types';

const Navbar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'background', label: 'Background' },
    { id: 'projects', label: 'Projects' },
    { id: 'highlights', label: 'Highlights' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map(item => (
          <li key={item.id} className="navbar-item">
            <button 
              className={`navbar-link ${activePage === item.id ? 'active' : ''}`} 
              onClick={() => setActivePage(item.id)}
              data-nav-link
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
};

export default Navbar;