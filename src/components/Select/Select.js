import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const StyleWrapper = styled.select`
  border: none;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;

  color: ${COLORS.gray700};

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }
`

const Wrapper = styled.div`
  position: relative;
`

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  apperarance: none;
`

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;

  color: ${COLORS.gray700};

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
