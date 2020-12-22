import styled from 'styled-components';

const theme = {
  fontFamily: "'Space Grotesk', sans-serif",
};

const Text = styled.span`
  font-family: ${theme.fontFamily};
  font-size: 1rem;
`;

const Button = styled.button`
  background: black;
  color: white;
  font-size: 0.8rem;
  border: none;
  padding: 6px 8px;
  border-radius: 4px;
  font-family: ${theme.fontFamily};
  user-select: none;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

const Input = styled.input`
  font-family: ${theme.fontFamily};
  padding: 4px 8px;
`;

export { Text, Button, Input };
