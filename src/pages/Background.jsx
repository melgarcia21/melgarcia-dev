import TimelineSection from '../components/TimelineSection';
import PropTypes from 'prop-types';

const Background = ({ active }) => {
  const experiences = [
    {
      title: "Software Dev Intern",
      period: "2025",
      description: "I worked as an Intern."
    },
    {
      title: "Freelancer",
      period: "2024",
      description: "I worked as a Freelancer."
    }
  ];

  const education = [
    {
      title: "Rizal Technological University",
      period: "2022 — 2026",
      description: "Bachelor of Science in Information Technology"
    },
    {
      title: "Microcadd Institute Inc.",
      period: "2021 — 2022",
      description: "Visual Graphic Design NCIII"
    },
    {
      title: "Arellano University Pasig",
      period: "2019 — 2021",
      description: "Senior High - TechVoc. Information and Communication Technology."
    },
  ];

  return (
    <article className={`background ${active ? 'active' : ''}`} data-page="background">
      <header>
        <h2 className="h2 article-title">Background</h2>
      </header>

      <TimelineSection 
        title="Experience" 
        icon="briefcase-outline" 
        items={experiences} 
      />

      <TimelineSection 
        title="Education" 
        icon="book-outline" 
        items={education} 
      />
    </article>
  );
};
Background.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Background;