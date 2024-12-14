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

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyleWrapper value={value} onChange={onChange}>
      {children}
    </StyleWrapper>
  );
};

export default Select;
