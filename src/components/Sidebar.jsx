
import PropTypes from 'prop-types';

const Sidebar = ({ showContacts, toggleContacts }) => {
  return (
    <aside className={`sidebar ${showContacts ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./images/avatar-1.png" alt="Mel Garcia" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Mel Garcia">Mel Garcia</h1>
          <p className="title">Full Stack Developer</p>
        </div>
        <button className="info_more-btn" onClick={toggleContacts} data-sidebar-btn>
          <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <ContactItem 
            icon="mail" 
            title="Email" 
            link={true} 
            content="melgarcia.dev@gmail.com" 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=melgarcia.dev@gmail.com" 
          />
          <ContactItem 
            icon="location-sharp" 
            title="Living in" 
            link={false} 
            content="Pasig City, Philippines" 
          />
          <ContactItem 
            icon="logo-linkedin" 
            title="LinkedIn" 
            link={true} 
            content="linkedin.com/in/mel-garcia/" 
            href="https://www.linkedin.com/in/melo-ervy-garcia-a26332207/" 
          />
          <ContactItem 
            icon="logo-github" 
            title="Github" 
            link={true} 
            content="github.com/melgarcia21" 
            href="https://github.com/melgarcia21" 
          />
        </ul>
      </div>
    </aside>
  );
};

const ContactItem = ({ icon, title, link, content, href }) => {
  return (
    <li className="contact-item">
      <div className="icon-box">
        <ion-icon name={icon}></ion-icon>
      </div>
      <div className="contact-info">
        <p className="contact-title">{title}</p>
        {link ? (
          <a href={href} className="contact-link" target="_blank" rel="noopener noreferrer">{content}</a>
        ) : (
          <address>{content}</address>
        )}
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  href: PropTypes.string,
};


Sidebar.propTypes = {
  showContacts: PropTypes.bool.isRequired,
  toggleContacts: PropTypes.func.isRequired,
};

export default Sidebar;