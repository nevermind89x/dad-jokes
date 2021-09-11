import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Styles from './Joke.styles';

const JokeWrapper = styled.p`${Styles.jokeWrapper}`;

/**
 * Renders a single Joke
 * @param {object} [param.value] joke text
 * @returns {JSX}
 */
const Joke = ({ value }) => {
  return (
    <JokeWrapper>
      {value}
    </JokeWrapper>
  )
};

Joke.propTypes = {
  value: propTypes.string.isRequired,
};

export default Joke;
