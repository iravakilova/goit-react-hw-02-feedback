import PropTypes from 'prop-types';
import { Title } from './SectionStyled';

export const Section = ({ title, children }) => (
  <section>
    {title && <Title>{title}</Title>}
    {children}
  </section>
);

Section.prototype = {
  title: PropTypes.string,
};
