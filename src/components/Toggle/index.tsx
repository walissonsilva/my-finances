import React from 'react';

import Switch from 'react-switch';

import {
  Container
} from './styles';

interface IToggle {
  onChange: (checked: boolean, event: MouseEvent | React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>, id: string) => void;
  checked: boolean;
}

const Toggle: React.FC<IToggle> = ({ onChange, checked }) => {
  return (
    <Container>
      <Switch
        onChange={onChange}
        checked={checked}
        size={30}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Container>
  )
};

export default Toggle;