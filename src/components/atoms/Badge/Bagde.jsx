import React from 'react';
import PropTypes from 'prop-types';

const Bagde = ({ label, shape, size, color, class_prefix }) => {
  return (
    <div
      className={
        !class_prefix
          ? `badge--${shape}--${size}--${color}`
          : `${class_prefix}__badge--${shape}--${size}--${color}`
      }
    >
      {label}
    </div>
  );
};

Bagde.propTypes = {
  label: PropTypes.string.isRequired,
  shape: PropTypes.oneOfType(['rectangular', 'circle']),
  size: PropTypes.oneOfType(['small', 'medium', 'big']),
  color: PropTypes.oneOfType(['primary', 'secondary', 'success', 'danger'])
};

Bagde.defaultProps = {
  shape: 'rectangular',
  size: 'medium',
  color: 'primary'
};

export default Bagde;
