import React, { useState } from 'react';



const schemes = [
  {
    id: 1,
    title: 'Agriculture Subsidy Scheme',
    description: 'Get financial assistance for agricultural equipment.',
    launchDate: '2024-10-01',
    endDate: '2024-12-31',

  },

  {
    id: 2,
    title: 'Rural Health Scheme',
    description: 'Free health check-ups and medical aid for rural communities.',
    launchDate: '2024-09-15',
    endDate: '2024-11-30',

  },
 


  {
    id: 3,
    title: 'Women Empowerment ',
    description: 'Entrepreneurship grants for rural women.',
    launchDate: '2024-08-01',
    endDate: '2024-12-01',

  },
  {
    id: 4,
    title: 'Rural Employment Scheme',
    description: 'Job creation and skill development programs for rural areas.',
    launchDate: '2024-09-01',
    endDate: '2024-12-01',

  },
 
  {
    id: 5,
    title: 'Clean Energy Initiative',
    description: 'Promoting renewable energy sources in villages.',
    launchDate: '2024-07-15',
    endDate: '2024-11-30',

  },

];


const SchemeCard = ({ title, description, launchDate, endDate, status }) => {
  return (
    <div className="scheme-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="scheme-dates">
        <p><strong>Launch Date:</strong> {launchDate}</p>
        <p><strong>End Date:</strong> {endDate}</p>
      </div>
      <div>
        <button className="cta-button-live">Apply Now</button>
      </div>
    </div>
  );
};


const LiveSchemesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;


  const totalPages = Math.ceil(schemes.length / itemsPerPage);


  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };


  const prevPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };


  const startIndex = currentIndex * itemsPerPage;
  const currentSchemes = schemes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="carousel-container bg-black">
      <h2>Live Schemes</h2>
      <div className="carousel">
        <button className="arrow left-arrow" onClick={prevPage}>
          &#8249;
        </button>
        <div className="scheme-list">
          {currentSchemes.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              title={scheme.title}
              description={scheme.description}
              launchDate={scheme.launchDate}
              endDate={scheme.endDate}
              status={scheme.status}
            />
          ))}
        </div>
        <button className="arrow right-arrow" onClick={nextPage}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default LiveSchemesCarousel;
