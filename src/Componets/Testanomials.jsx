import React, { useState } from 'react';
import Anu from '../assets/images/Anuska.jpg'
import Sapta from '../assets/images/Sapta.jpg'
import Arna from '../assets/images/Arna.jpg'
const testimonials = [
  {
    id: 1,
    name: 'Anuska Biswas',
    role: 'Officer, Andal',
    image: Anu,
    quote: 'The Rural Health Scheme has been a game changer for our community. We’ve provided healthcare to over 500 families!',
    story: 'Before this scheme, I struggled with outdated tools. Now, my yield has doubled and my income has significantly increased. This scheme has transformed the way we farm in our village.',
  },
  {
    id: 2,
    name: 'Saptarshi Paul',
    role: 'Farmer, Andal',
    image: Sapta,
    quote: 'Thanks to the Agriculture Subsidy Scheme, I was able to purchase new equipment for my farm!',
    story: 'Our village had minimal healthcare access. Implementing this scheme allowed us to organize free checkups and distribute essential medicine to hundreds of villagers, improving the quality of life for everyone.',
  },
  {
    id: 3,
    name: 'Arna Dutta',
    role: 'Entrepreneur, Andal',
    image: Arna,
    quote: 'With the Women Empowerment Scheme, I started my own small business and now employ five others!',
    story: 'Starting a business was always a dream, but without financial aid, it was impossible. This scheme provided me with the resources to begin my journey as an entrepreneur. Now, I’m able to help my family and my community.',
  },

];

const TestimonialCard = ({ name, role, image, quote, story }) => {


  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-image" />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="quote">"{quote}"</p>

    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials-section bg-black">
      <h2>Success Stories</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            quote={testimonial.quote}
            story={testimonial.story}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
