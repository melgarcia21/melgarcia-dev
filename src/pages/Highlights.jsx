
import HighlightItem from '../components/HighlightItem';
import PropTypes from 'prop-types';

const Highlights = ({ active }) => {
  const highlightsData = [
    {
      image: "./images/highlights-1.jpg",
      category: "Design",
      date: "2022-02-23",
      dateFormatted: "Fab 23, 2022",
      title: "Highlights 1 Header",
      text: "Highlights 1 p tag"
    },
    {
      image: "./images/highlights-2.jpg",
      category: "Design",
      date: "2022-02-23",
      dateFormatted: "Fab 23, 2022",
      title: "Highlights 2 Header",
      text: "Highlights 2 p tag"
    }
  ];

  return (
    <article className={`highlights ${active ? 'active' : ''}`} data-page="highlights">
      <header>
        <h2 className="h2 article-title">Highlights</h2>
      </header>

      <section className="highlights-posts">
        <ul className="highlights-posts-list">
          {highlightsData.map((highlight, index) => (
            <HighlightItem 
              key={index}
              image={highlight.image}
              category={highlight.category}
              date={highlight.date}
              dateFormatted={highlight.dateFormatted}
              title={highlight.title}
              text={highlight.text}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};
Highlights.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Highlights;