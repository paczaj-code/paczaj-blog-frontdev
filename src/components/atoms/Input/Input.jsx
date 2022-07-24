import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  name,
  value,
  disabled,
  onChange,
  class_prefix,
  size,
  color
}) => {
  const isDisabled = disabled ? 'disabled' : null;
  return (
    <input
      type={type}
      name={name}
      value={value}
      disabled={isDisabled}
      onChange={onChange}
      className={
        class_prefix
          ? `${class_prefix}__input--${size}--${color}`
          : `input--${size}--${color}`
      }
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  class_prefix: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  value: null,
  disabled: false,
  size: 'medium',
  color: 'primary',
  class_prefix: null
};

export default Input;
