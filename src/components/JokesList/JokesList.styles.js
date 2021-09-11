import { css } from 'styled-components';

const styles = {
  jokesListContainer: css`
    padding: 40px;
    display: flex;
    max-width: 600px;
    margin: 40px auto;
    flex-direction: column;
  `,
  jokesListWrapper: css`
    margin: 10px 0;
  `,
  buttonsWrapper: css`
    display: flex;
    justify-content: space-between;
  `,
  topBarWrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
};

export default styles;
