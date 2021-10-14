import React from 'react';
import styled from 'styled-components';
import {ElementsProducts} from "./ElementsProducts";
import ProductCard from "../ProductCard";
import Text from "../header/Text";


const Products= ({}) => {
    return(
        <>
          <Text/>
            <ContainerProducts>
                {ElementsProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </ContainerProducts>

        </>
    )
}

export default Products;

const ContainerProducts= styled.div `
  display: grid;
  grid-template-columns: repeat(4, minmax(0%, 100%));
  max-width: 1030px;
  margin: 40px auto;
  grid-column-gap: 50px;
  grid-row-gap: 22px;
  grid-auto-rows: minmax(min-content, max-content);

  @media only screen and (max-width: 950px) {
    display: grid;
    grid-template-columns:repeat(3, minmax(0%, 100%)) ;
    max-width: 800px;
    
  }

  @media only screen and (max-width: 692px) {
    display: grid;
    grid-template-columns:repeat(2, minmax(0%, 100%)) ;
    max-width: 500px;
  }
  @media only screen and (max-width: 532px) {
    display: grid;
    grid-template-columns:repeat(1, minmax(0%, 100%)) ;
    max-width: 400px;
  }
    
`;


