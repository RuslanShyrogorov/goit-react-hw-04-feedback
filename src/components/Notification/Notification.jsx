import React from 'react';
import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

export default function Notification({ text }) {
  return <NotificationText>{text}</NotificationText>;
}

Notification.propType = {
  text: PropTypes.string.isRequired,
};
