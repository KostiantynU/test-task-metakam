import styled from 'styled-components';

export const ProductsListStyled = styled('ul', {
  shouldForwardProp: p => p !== 'isTablet',
})`
  display: grid;
  grid-template-columns: repeat(2, 185px);
  justify-content: ${props => (props.isTablet ? 'center' : 'space-around')};
  gap: 2px;
  margin: 0;
  padding: 0;

  list-style: none;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 272px);
    /* justify-content: center; */
    gap: 16px;
  }
`;

export const ProductImgStyled = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
