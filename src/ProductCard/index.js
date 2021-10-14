import Modal from "../Modal";
import React, {useState} from "react";
import styled from "styled-components";

const Layout = styled.div `
  box-shadow: 0px 10px 18px #E1E0E1;
  display: flex;
  flex-direction: column;
  ${props => `
    ${props.special ? `
        border: 1px solid #F28D14; 
        
    `: ''}
  `}
  
  
  .top{

    flex: 1;
    justify-content: center;
    img {
      width: auto;
      max-height: 200px;
      
    }
  }
  
  .bottom{
    padding-top: 28px;
  }

  @media only screen and (max-width: 532px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .bottom{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const TitleCard= styled.h5 `
    font-size: 20px;
    font-weight: bold;
    color: black;
    
    
    
`;

const Price= styled.h2`
    font-size: 36px;
    font-weight: bold;
    position: relative;

  &:after{
    content: "";
    position: absolute;
    left: 14px;
    width: 193px;
    bottom: -2px;
    height: 1px;
    background-color: #97D3F0;

  }
  @media only screen and (max-width: 532px) {
    &:after{
      content: "";
      position: absolute;
      left: -32px;
      width: 193px;
      bottom: -2px;
      height: 1px;
      background-color: #97D3F0;

    }
  }
    
    
`;

const PinkCard= styled.button `
    font-size: 12px;
    background-color: #EB3B8B;
    color: #fff;
    padding: 3px 24px;
    outline: none;
    border: none;
    font-weight: bold;
    margin-top: 12px;
  ${props => `
    ${props.alternative ? `
        background-color:transparent;
        color:#A03DA0;
        font-size:22px;
        font-weight: bolder;
        
    `: ''}
  `}
    
    
    
`;

export const GreenCardButton = styled.button `

  background-color: #5bc500;
  color: #FFF;
  text-align: center;
  padding: 14px 68px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  border: none;
  margin: 10px 0 20px 0;
    
    
    
`;

const ContainerDescuento= styled.div`
    background-color: #F28D14;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
 

`;

function ProductCard({product}) {
    const [isModalOpen, setOpenModal] = useState(false);
    return (
        <Layout special={product?.discount ?? false}>
            <div className={'top'}>
                {product?.discount && (
                    <ContainerDescuento>
                        OFERTA EXCLUSIVA WEB
                    </ContainerDescuento>
                )}
                <TitleCard>{product.title}</TitleCard>

                <img src={product.image} />

            </div>

            <div className={'bottom'} onClick={() => {setOpenModal(true);}}>
                <Price>{product.price}</Price>
                <PinkCard alternative={product?.pinkAlternative}>{product.pink}</PinkCard>
                <GreenCardButton>{product.green}</GreenCardButton>
            </div>
            {isModalOpen && <Modal setOpenModal={setOpenModal}/> }
        </Layout>
    )
}

export default ProductCard;

