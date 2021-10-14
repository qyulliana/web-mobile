import React from "react";
import styled from "styled-components";

const Footer= () => {
    return(
        <ContainerFooter>
            <ParagraphFooter>*Precio del plan mensual. Todos los contratos son a 2 años, exclusivo clientes particulares. Oferta sujeta a disponibilidad de stock. Oferta de GIGAS Dobles y celulares válida hasta el <br/>31/10, para altas o renovaciones con aumento de tarifa mensual a partir de $999</ParagraphFooter>
           <ContainerLinks>
            <LinkFooter href={'#'}>Ver Términos y Condiciones Generales</LinkFooter>
            <LinkFooter href={'#'}>Ver información de Planes</LinkFooter>
           </ContainerLinks>
        </ContainerFooter>
    )
}

export default Footer;

const ContainerFooter= styled.div`
  
`;

const ParagraphFooter= styled.div`
`;

const ContainerLinks= styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`;

const LinkFooter= styled.a`
  text-decoration: darkblue;!important;
    
`;