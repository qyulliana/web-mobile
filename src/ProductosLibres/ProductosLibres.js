import React from "react";
import Products from "../Products/Products";
import ProductCard from "../ProductCard";
import styled from "styled-components";
import {ElementsLibres} from "./ElementsProducts";
import Text from "../header/Text";


function ProductosLibres() {

  return(
    <>
      <TextFree>Celulares Libres</TextFree>
      <ParagraphFree>¡Encontrá los Mejores Precios en Celulares Libres hasta en 12 cuotas sin recargo! Aprovechá el ENVÍO GRATIS</ParagraphFree>
    <ContainerProducts>
      {ElementsLibres.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </ContainerProducts>
    </>
  )

}

export default ProductosLibres;


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

const TextFree= styled.h2`
  font-size: 50px;
  margin: 20px;
  @media only screen and (max-width: 500px) {
    font-size: 36px;
  }
`;

const ParagraphFree= styled.p`
  font-weight: bold;
`;