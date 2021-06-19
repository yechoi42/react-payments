import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h2>404</h2>
      <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
      <h3>Page not found</h3>
    </div>
  );
};

export default PageNotFound;
