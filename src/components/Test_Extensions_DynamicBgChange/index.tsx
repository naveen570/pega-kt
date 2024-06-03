import { Text, withConfiguration } from '@pega/cosmos-react-core';
import styled from 'styled-components';

import type { PConnFieldProps } from './PConnProps';

// interface for props
interface TestExtensionsDynamicBgChangeProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  // pyStatusWork: string;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function TestExtensionsDynamicBgChange(props: TestExtensionsDynamicBgChangeProps) {
  const { getPConnect } = props;

  const statusWork = getPConnect().getValue('.pyStatusWork');
  const possibleStatus: Record<string, string> = {
    NEW: 'red',
    OPEN: 'green'
  };
  const currentStatus = possibleStatus[statusWork.toUpperCase()];
  const StyledText = styled(Text)`
    background-color: ${currentStatus};
    padding-inline: calc(0.25rem);
    line-height: 1rem;
    border: 1px solid ${currentStatus};
    border-radius: calc(0.125rem);
    box-shadow: rgba(76, 90, 103, 0.1) 0px 0px 0px 0.0625rem inset;
    font-weight: bold;
    text-transform: uppercase;
  `;
  return <StyledText>{statusWork}</StyledText>;
}

export default withConfiguration(TestExtensionsDynamicBgChange);
