import React from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AddCardSection.scss';

const AddCardSection = () => {
  return (
    <>
      <Link to="/register">
        <Card className="card add-card-section">
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </Card>
      </Link>
    </>
  );
};

export default AddCardSection;
