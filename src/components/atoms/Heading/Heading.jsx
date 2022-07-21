import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ Tag, label, class_prefix }) => {
  return (
    <Tag
      className={
        class_prefix ? `${class_prefix}__heading--${Tag}` : `heading--${Tag}`
      }
    >
      {label}
    </Tag>
  );
};

Heading.propTypes = {
  Tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  label: PropTypes.string.isRequired,
  class_prefix: PropTypes.string
};

Heading.defaultProps = {
  class_prefix: null
};

export default Heading;
