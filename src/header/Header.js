import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import useCheckMobile from "../hooks/useCheckMobile";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const isMobile = useCheckMobile();

    const handleClickMenu = useCallback(() => {
        setMenuVisible(!isMenuVisible);
    }, [isMenuVisible]);




    return(
        <>

            {isMenuVisible && (
                <Backdrop>
                    <Menu>
                        <Button onClick={handleClickMenu}>
                            <FontAwesomeIcon size={'20px'} icon={faHamburger} color={'#000'} />
                        </Button>

                        <ListaHamburguer>
                            <ItemHamburguer>plan+celulares</ItemHamburguer>
                            <ItemHamburguer>celulares libres</ItemHamburguer>
                            <ItemHamburguer>planes gigantes duo</ItemHamburguer>
                            <ItemHamburguer>iphone</ItemHamburguer>
                        </ListaHamburguer>
                    </Menu>
                </Backdrop>
            )}

            <ContainerHeader>
                    <ContainerListaImg>
                    <img src={'https://ofertas.movistar.com.uy/off/templates/vacio/images/logo-movistar-azul.svg'} width={'160px'}/>

                        {isMobile ? (
                            <ButtonBurg onClick={handleClickMenu}>
                                <FontAwesomeIcon size={'20px'} icon={faHamburger} color={'#000'} />
                            </ButtonBurg>
                        ) : (
                            <ListaHeader>
                                <ItemHeader>
                                  <Link to={'/'}>plan+Celulares</Link>
                                </ItemHeader>
                                <ItemHeader>
                                  <Link to={'/productos-libres'}>celulares libres</Link>
                                </ItemHeader>
                                <ItemHeader>planes gigantes duo</ItemHeader>
                                <ItemHeader>iphone</ItemHeader>
                            </ListaHeader>
                        )}
                   </ContainerListaImg>





            </ContainerHeader>
        </>
    )
}

export default Header;

const ContainerHeader= styled.div `
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    box-shadow: 0px 10px 18px #E1E0E1;
    width: 100%;
    border: none;
    height: 62px;
`;

const ListaHeader= styled.ul `
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 12px;

  
`;

const ItemHeader= styled.li`
  font-size: 14px;
  color: #444;
  padding-right: 18px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 800;
  position: relative;
  
  &:hover{
    &:after{
      content: "";
      position: absolute;
      left: calc(52% - 24px);
      width: 24px;
      bottom: -2px;
      height: 3px;
      background-color: #EEEEEE;
      
    }
  }

  

`;

const ContainerListaImg= styled.div `
    display: flex;
    flex-direction: row;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  position: relative;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  right: 30px;
  top: 20px;
  font-size: 24px;
  position: absolute;
  cursor: pointer;
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const Menu = styled.div`
  width: 300px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;

const ButtonBurg= styled.button`
  border: none;
  background-color: transparent;
  right: 30px;
  top: 20px;
  font-size: 24px;
  position: absolute;
  cursor: pointer;
`;

const ListaHamburguer= styled.ul `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style-type: none;
    margin-top: 70px;
`;

const ItemHamburguer= styled.li`
    padding: 12px;
    text-align: left;
    font-size: 26px;
    font-weight: bold;
    cursor: pointer;
    
  
    :hover{
      background-color: #EFEFEF;
    }

`;