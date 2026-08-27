import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ImageDot = ({ active, onClick }) => {
  return (
    <FontAwesomeIcon icon={faCircle}
      className={`text-xs cursor-pointer ${active ? 'text-light-purple' : 'text-light-border'}`}
      onClick={onClick}
    />
  );
};

export default ImageDot;