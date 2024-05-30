import { withConfiguration, Text } from '@pega/cosmos-react-core';
import styled, { css } from 'styled-components';

import type { PConnFieldProps } from './PConnProps';

import StyledTestExtensionsTextBgColorWrapper from './styles';

// interface for props
interface TestExtensionsTextBgColorProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  statusType: string;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
const StyledText = styled(Text)`
  /* Base styling */
  font-size: 16px;
  padding: 10px;

  /* Conditional styling based on status */
  ${props =>
    props.statusType === 'new' &&
    css`
      color: white;
      background-color: green;
    `}

  ${props =>
    props.statusType === 'open' &&
    css`
      color: white;
      background-color: blue;
    `}

  ${props =>
    props.statusType === 'in-progress' &&
    css`
      color: white;
      background-color: orange;
    `}

  ${props =>
    props.statusType === 'close' &&
    css`
      color: white;
      background-color: red;
    `}

  ${props =>
    props.statusType === 'done' &&
    css`
      color: white;
      background-color: gray;
    `}
`;
function TestExtensionsTextBgColor(props: TestExtensionsTextBgColorProps) {
  return (
    <StyledTestExtensionsTextBgColorWrapper>
      <StyledText statusType={props.statusType}>{props.label}</StyledText>
    </StyledTestExtensionsTextBgColorWrapper>
  );
}

export default withConfiguration(TestExtensionsTextBgColor);
