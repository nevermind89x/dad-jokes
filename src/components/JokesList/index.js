import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import useJokes from '../../hooks/useJokes';
import Button from '../Button';
import Joke from '../joke';
import Styles from './JokesList.styles';

const JokesListContainer = styled.div`${Styles.jokesListContainer}`;
const JokesListWrapper = styled.div`${Styles.jokesListWrapper}`;
const ButtonsWrapper = styled.div`${Styles.buttonsWrapper}`;
const TopBarWrapper = styled.div`${Styles.topBarWrapper}`;

JokesListContainer.displayName = 'jokes';

const MIN_PAGE = 1;

/**
 * JokesList Component - shows a list of paginated jokes
 * @returns {JSX}
 */
const JokesList = () => {
  const [page, setPage] = useState(MIN_PAGE);
  const { jokes, loading } = useJokes(page);

  const { results, total_pages: totalPages } = jokes;

  const onClick = useCallback((type) => (e) => {
    e.preventDefault();

    if (type === 'prev' && page > MIN_PAGE) {
      setPage(page - 1);
    } else if (type === 'next' && page < totalPages) {
      setPage(page + 1);
    }
  }, [page, totalPages]);


  return (
    <JokesListContainer>
      <TopBarWrapper>
        <h1>Dad Jokes!</h1>
        <div>{page} / {totalPages}</div>
      </TopBarWrapper>
      <JokesListWrapper>
        {results.map(({ id, joke }) => (
          <Joke value={joke} key={id} />
        ))}
      </JokesListWrapper>
      <ButtonsWrapper>
        <Button disabled={loading} value="Previous" onClick={onClick('prev')} />
        {loading && <div>Loading new Dad Jokes!</div>}
        <Button disabled={loading} value="Next" onClick={onClick('next')} />
      </ButtonsWrapper>
    </JokesListContainer>
  )
};

export default JokesList;
