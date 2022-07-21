import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, value, disabled }) => {
  const isDisabled = disabled ? 'disabled' : null;
  return <input type={type} name={name} value={value} disabled={isDisabled} />;
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
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
  value: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  value: null,
  disabled: false
};

export default Input;
