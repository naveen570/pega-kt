import { withConfiguration, Text } from '@pega/cosmos-react-core';
import styled from 'styled-components';

import type { PConnFieldProps } from './PConnProps';

import StyledTestExtensionsTextBgColorWrapper from './styles';

// interface for props
interface TestExtensionsTextBgColorProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  statusType: string;
  statusesAvailable: string;
  colorsAvailable: string;
}

function TestExtensionsTextBgColor(props: TestExtensionsTextBgColorProps) {
  let { statusType, statusesAvailable, colorsAvailable } = props;
  const { value } = props;
  [statusType, statusesAvailable, colorsAvailable] = [
    statusType,
    statusesAvailable,
    colorsAvailable
  ].map(prop => {
    if (typeof prop === 'string' && prop.length > 0) {
      return prop;
    }
    return '';
  });

  const colors: Array<string> = colorsAvailable.split(',');
  const statuses: Array<string> = statusesAvailable.split(',');
  const statusColor: string = colors[statuses.indexOf(statusType)] ?? 'black';
  const StyledText = styled(Text)`
    color: ${statusColor};
    padding: 0.5rem 0.25rem;
    border: 1px solid ${statusColor};
    border-radius: 0.25rem;
  `;
  return (
    <StyledTestExtensionsTextBgColorWrapper>
      <StyledText {...props}>{value}</StyledText>
    </StyledTestExtensionsTextBgColorWrapper>
  );
}

export default withConfiguration(TestExtensionsTextBgColor);
