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
  shape: PropTypes.oneOf(['rectangular', 'circle']),
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  class_prefix: PropTypes.string
};

Bagde.defaultProps = {
  shape: 'rectangular',
  size: 'medium',
  color: 'primary',
  class_prefix: null
};

export default Bagde;
