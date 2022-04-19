import { buttonCommonStyles } from '@ed-ui/styles';
import { styled } from "@stitches/react";
import { ButtonProps } from "./types/ButtonProps";

const StyledButton = styled("button", buttonCommonStyles);

const Loading = () => <div>loading...</div>;

const Button = ({ children, isLoading, ...restProps }: ButtonProps) => {
  return (
    <StyledButton {...restProps}>
      {isLoading ? <Loading /> : children}
    </StyledButton>
  );
};

export { Button };
