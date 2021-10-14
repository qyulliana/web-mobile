import React from 'react';
import styled from 'styled-components';

const Text= () => {
    return(
        <>
            <ContainerText>
                <TextH2>Plan + Celular</TextH2>
                <TextParagraph>Renová tu contrato o cambiate a Movistar con un DESCUENTO GIGANTE y MÁS GIGAS en tu Plan GIGAnte DÚO</TextParagraph>
            </ContainerText>
        </>
    )
}

export default Text;

const ContainerText= styled.div`
    display: flex;
    flex-direction: column;
    
  


`;

const TextH2= styled.h2`
    font-size: 50px;
    margin: 20px;
  @media only screen and (max-width: 500px) {
    font-size: 36px;
  }

`;

const TextParagraph= styled.p`
    font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }

`;