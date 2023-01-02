import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive, handleClick] = useState(false);

  return (
    <div className="accordion-item py-5 skills">
      <div
        role="presentation"
        className="accordion-title language-header-container"
        onClick={() => setIsActive(!isActive)}
        onKeyDown={handleClick}
      >
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content px-5">{content}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Accordion;
