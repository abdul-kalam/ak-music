import styled from 'styled-components';

export const BackToTopButton = styled.div`
  cursor: ${(props) => (props.isScrolled ? 'pointer' : 'auto')};
  position: fixed;
  bottom: 54px;
  right: 24px;
  @media only screen and (max-width: '540px') {
    bottom: 48px;
    right: 12px;
  }
`;
