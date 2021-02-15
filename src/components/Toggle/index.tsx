import React from 'react';

import Switch from 'react-switch';

import { useTheme } from '../../hooks/Theme';

import {
  Container
} from './styles';

interface IToggle {
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  checked: boolean;
}

const Toggle: React.FC<IToggle> = ({ onChange, checked }) => {
  const { isDark } = useTheme();

  return (
    <Container>
      <Switch
        onChange={() => onChange(!isDark)}
        checked={checked}
        size={30}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={'#bfbfbf'}
        offColor={'#1b1f38'}
      />
    </Container>
  )
};

export default Toggle;