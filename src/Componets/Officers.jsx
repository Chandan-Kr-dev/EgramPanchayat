import React from "react";
import Chandan from '../assets/images/Chandan.jpg'
import Sujay from '../assets/images/Sujay.jpg'
import Sangita from '../assets/images/Sangita.jpg'

const Officers = [
  {
    id: 1,
    name: "Chandan Kumar",
    designation: "Pradhan",
    image: Chandan,
    place: "Bankura",
  },
  {
    id: 2,
    name: "Sujay De",
    designation: "Upadhyaksh",
    image: Sujay,
    place: "Purulia"
  },
  {
    id: 3,
    name: "Sangita Biswas",
    designation: "Pradhan",
    place: "Andal",
    image: Sangita,
  },
];

const OfficersCard = ({ name, designation, place, image }) => {

  return (
    <div className="officers-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Designation : {designation}</p>
      <p>Place : {place}</p>
    </div>
  )
}

const officers = () => {
  return (
    <div className="officers-section bg-black">
      <h2>Meet Top Officers</h2>
      <div className="officers-grid">
        {Officers.map((testimonial) => (
          <OfficersCard
            key={testimonial.id}
            name={testimonial.name}
            designation={testimonial.designation}
            image={testimonial.image}
            place={testimonial.place}
           
          />
        ))}
      </div>
    </div>
  );
};

export default officers;