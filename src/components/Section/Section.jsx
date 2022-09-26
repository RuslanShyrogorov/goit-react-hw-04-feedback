import React from 'react';
import PropTypes from 'prop-types';
import { SectionConteiner } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionConteiner>
      <h2>{title}</h2>
      {children}
    </SectionConteiner>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
