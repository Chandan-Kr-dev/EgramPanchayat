import React from 'react';

const RoleCard = ({ role, description, buttonText, buttonAction }) => {
  return (
    <div className="role-card">
      <h2>{role}</h2>
      <p>{description}</p>
      <button className="cta-button-role" >{buttonText}</button>
    </div>
  );
};


const RoleSection = () => {


  return (

    <div className="role-section-container">

      <div className='roles-heading'>Our Features</div> 
      <div className='role-section'>
        <RoleCard
          role="Admins"
          description="Admins can launch new government schemes, edit existing ones, and track their status."
          buttonText="Launch a Scheme"

        />

        <RoleCard
          role="Officers"
          description="Officers review, approve, or reject schemes launched by Admins after Verification of Documents"
          buttonText="Manage Schemes"

        />


        <RoleCard
          role="Users"
          description="Users can explore and apply for government schemes designed to support rural communities."
          buttonText="Browse Schemes"

        />
      </div>
    </div>
  );
};

export default RoleSection;
