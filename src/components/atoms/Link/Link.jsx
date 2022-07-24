import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, size, color, class_prefix }) => {
  return (
    <a
      href={href}
      className={
        class_prefix
          ? `${class_prefix}__link--${size}--${color}`
          : `link--${size}--${color}`
      }
    ></a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  class_prefix: PropTypes.string
};

Link.defaultProps = {
  size: 'medium',
  color: 'primary',
  class_prefix: null
};

export default Link;
