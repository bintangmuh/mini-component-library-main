/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  "large": {
    "--height": "24px",
    "--padding": "4px",
    "--borderRadius": "8px"
  },
  "medium": {
    "--height": "12px",
    "--padding": "0",
    "--borderRadius": "4px"
  },
  "small": {
    "--height": "8px",
    "--padding": "0",
    "--borderRadius": "4px"
  }
}
const ProgressWrapper = styled.div`
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;
`

const BarWrapper=styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`
const Bar=styled.div`
  width: var(--width);
  height: 100%;
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
`



const ProgressBar = ({ value, size }) => {
  return (<ProgressWrapper style={SIZE[size]} role='progressbar' aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
    <BarWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
      <Bar style={{ "--width": value + "%"}} />
    </BarWrapper>
  </ProgressWrapper>);
};

export default ProgressBar;
