import React, {useState} from 'react';
import styled from "styled-components";
import Selector from "./Selector";


const ButtonSend = styled.button`
  background: #5bc500;
  color: #FFF;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  min-width: 180px;
  text-transform: uppercase;
  width: 30%;
  margin-top: 12px;
    


`;

const ModalBackground= styled.div `
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 22px;
    overflow: auto;
`;

const ModalContainer= styled.div `
      width: 500px;
      background-color: white;
      box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px;
      display: flex;
      flex-direction: column;
      padding: 25px;
      position: absolute;
`;

const ButtonX= styled.button`
    cursor: pointer;
    color: #61dafb;
    border: none;
    background-color: transparent;
    font-size: 26px;
    font-weight: bold;
    
`;

const Title= styled.h2`
    font-weight: bold;
`;

const LabelModal= styled.label`
    text-align: left;
    font-weight: bolder;
`;

const InputModal= styled.input`
  padding: 5px 10px;
  font-size: 20px;
  background-color: #FFF;
  color: #444;
  border: solid 2px #00a9e0;
  border-radius: 4px;
  margin-top: 10px;

`;

const ContainerInput= styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
`;

const ParagraphModal= styled.p`
    font-weight: bolder;
    font-size: 16px;
`;

const PModal= styled.p`
  font-size: 13px;
  color: #A1A1A1;
  margin-top: 6px;
    `
;

const ContainerModalParagraphs= styled.div`
    margin-top: 16px;
    text-align: left;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ModalBody = styled.div``;

const ContainerButtonsModal = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    justify-content: center;
    align-items: center;

`;


const ContainerButtonGreenModal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12px;
`;


function Modal({setOpenModal}) {
    const [timezoneSelected, setTimezoneSelected] = useState(0);

    console.log({setOpenModal})
    return(
        <ModalBackground>
            <ModalContainer>
                <ModalHeader>
                    <ButtonX onClick={() => {setOpenModal(false);}}> X </ButtonX>
                </ModalHeader>
                <ModalBody>
                    <Title>Te ayudamos a comprar</Title>
                    <ContainerInput>
                        <LabelModal>Ingresa un numero de contacto:</LabelModal>
                        <InputModal></InputModal>
                    </ContainerInput>

                    <ContainerModalParagraphs>
                        <ParagraphModal>Horario: Lunes a Domingos de 9 a 21hs.</ParagraphModal>
                        <PModal>Selecciona el horario para llamarte</PModal>
                    </ContainerModalParagraphs>
                    <ContainerButtonsModal>

                        <Selector
                            selected={timezoneSelected}
                            onSelect={(id) => setTimezoneSelected(id)}
                            options={[
                                {
                                    name: 'Ahora'
                                },
                                {
                                    name: '9 a 12hs'
                                },
                                {
                                    name: '12 a 18hs'
                                },
                                {
                                    name: '18 a 21hs'
                                }
                            ]}
                        />

                    </ContainerButtonsModal>
                </ModalBody>
                <ContainerButtonGreenModal>
                    <ButtonSend>Enviar</ButtonSend>
                </ContainerButtonGreenModal>

            </ModalContainer>

        </ModalBackground>

    )
}


export default Modal;

