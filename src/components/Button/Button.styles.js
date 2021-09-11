import { css } from 'styled-components';

const styles = {
  buttonWrapper: css`
    background-color: #4e4d4d;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    border: 0;
    max-height: 30px;

    &:hover {
      background-color: #656565;
    }
  `,
};

export default styles;
