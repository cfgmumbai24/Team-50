import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, link }) => {
  return (
    <div className="border rounded-lg p-4 m-4 w-80 text-center flex-shrink-0">
      <h2 className="text-xl font-semibold">{title}</h2>
      {link && (
        <Link to={link} className="text-blue-500 mt-2 inline-block">
          {title}
        </Link>
      )}
    </div>
  );
};

export default Card;
