import React from 'react';
import styled from 'styled-components';

type Product = {
  id: number;
  name: string;
  size: string;
  price: number;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Armário Pequeno',
    size: 'P',
    price: 0,
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Armário Médio',
    size: 'M',
    price: 0,
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    name: 'Armário Grande',
    size: 'G',
    price: 0,
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const ProductListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px auto;
  max-width: 800px;
  flex-direction: column;
`;

const ProductCard = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    margin-right: ${({ reverse }) => (reverse ? '0' : '20px')};
    margin-left: ${({ reverse }) => (reverse ? '20px' : '0')};
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductComponent: React.FC<{ product: Product; reverse?: boolean }> = ({
  product,
  reverse,
}) => {
  return (
    <ProductCard reverse={reverse}>
      <img src={product.imageUrl} alt={product.name} />
      <ProductInfo>
        <h3>{product.name}</h3>
        <p>
          <strong>Tamanho:</strong> {product.size}
        </p>
        <p>
          <strong>Preço:</strong> R${product.price.toFixed(2)}
        </p>
      </ProductInfo>
    </ProductCard>
  );
};

const ProductPage: React.FC = () => {
  return (
    <ProductListContainer>
      <ProductComponent product={products[0]} reverse />
      <ProductComponent product={products[1]} />
      <ProductComponent product={products[2]} reverse />
    </ProductListContainer>
  );
};

export default ProductPage;
