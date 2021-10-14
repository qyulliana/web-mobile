// Dependencies
import React from 'react';

// Styled Components
import {
  List,
  ButtonBlue
} from './styles'

function Selector({
  options = [],
  selected = 0,
  onSelect = () => null
}) {

  if (!options.length) {
    return null;
  }

  return (
    <List>
      {options.map((option, index) => (
        <ButtonBlue
          isSelect={selected === index}
          onClick={() => onSelect(index)}
          key={`option-key-${index.toString()}`}>
          {option.name}
        </ButtonBlue>
      ))}
    </List>
  );
}

export default Selector;