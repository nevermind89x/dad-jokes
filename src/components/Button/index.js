import styled from 'styled-components';
import propTypes from 'prop-types';
import Styles from './Button.styles';

const ButtonWrapper = styled.button`${Styles.buttonWrapper}`;
ButtonWrapper.displayName = 'button';

const Button = ({
  value,
  onClick,
  disabled,
}) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      {value}
    </ButtonWrapper>
  )
};

Button.propTypes = {
  value: propTypes.string.isRequired,
};


export default Button;
