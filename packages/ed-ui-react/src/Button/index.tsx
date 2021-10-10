import ReactLoading from 'react-loading';
import { IButton } from '@estartando-devs/ed-ui-types';
import * as S from './ButtonStyled';

export const Button = ({
  isLoading,
  children,
  ...rest
}: IButton) => (
  <S.ButtonContainer
    isLoading={isLoading}
    {...rest}
  >
    {isLoading ? (
      <ReactLoading type="spokes" height="20px" width="20px" />
    ) : (
      children
    )}
  </S.ButtonContainer>
);

Button.defaultProps = {
  variant: 'default',
  size: 'small',
  isLoading: false,
  disabled: false
}
