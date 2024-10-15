import React, { useState } from 'react';



const schemes = [



  {
    id: 1,
    title: 'Village Electrification ',
    description: 'Providing solar power solutions to remote villages.',
    launchDate: '2024-07-01',
    endDate: '2024-09-30',

  },
  {
    id: 2,
    title: 'Water Conservation Scheme',
    description: 'Assistance for building water storage facilities.',
    launchDate: '2024-05-01',
    endDate: '2024-08-31',

  },
  {
    id: 3,
    title: 'Educational Aid Scheme',
    description: 'Financial aid for rural students pursuing higher education.',
    launchDate: '2024-06-01',
    endDate: '2024-09-01',

  },
  {
    id: 4,
    title: 'Women Empowerment ',
    description: 'Entrepreneurship grants for rural women.',
    launchDate: '2024-08-01',
    endDate: '2024-10-01',

  },

  {
    id: 5,
    title: 'Community Health Workers',
    description: 'Training for community health workers in rural regions.',
    launchDate: '2024-04-01',
    endDate: '2024-08-31',

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
        <button className="cta-button-past">Apply Now</button>
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
      <h2>Past Schemes</h2>
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
