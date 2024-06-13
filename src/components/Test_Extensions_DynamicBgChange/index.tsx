import { Text, withConfiguration } from '@pega/cosmos-react-core';
import styled from 'styled-components';

import type { PConnFieldProps } from './PConnProps';

// interface for props
interface TestExtensionsDynamicBgChangeProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  // pyStatusWork: string;
  statusesAvailable: string;
  colorsAvailable: string;
}
interface StateProps {
  value: string;
}
// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function TestExtensionsDynamicBgChange(props: TestExtensionsDynamicBgChangeProps) {
  const { getPConnect } = props;
  let { statusesAvailable, colorsAvailable } = props;
  [statusesAvailable, colorsAvailable] = [statusesAvailable, colorsAvailable].map(prop => {
    if (typeof prop === 'string' && prop.length > 0) {
      return prop;
    }
    return '';
  });
  console.log(getPConnect().getCurrentClassID());
  const colors: Array<string> = colorsAvailable.split(',');
  const statuses: Array<string> = statusesAvailable.split(',');

  const stateName = (getPConnect().getStateProps() as StateProps).value;
  const currentValue = getPConnect().getValue(stateName);
  if (currentValue === null || currentValue === undefined || currentValue.length === 0) {
    return <Text>--</Text>;
  }
  const statusColor: string = colors[statuses.indexOf(currentValue.toLowerCase())] ?? 'grey';

  // const statusColorMapping = colors.map((color, index) => {
  //   const currentIndexStatus = statuses[index];
  //   return {
  //     [`${currentIndexStatus}`]: color
  //   };
  // });
  // const possibleStatus: Record<string, string> = {
  //   NEW: 'red',
  //   OPEN: 'green'
  // };
  // const currentStatus = statusColorMapping[currentValue.toUpperCase()];
  const StyledText = styled(Text)`
    background-color: ${statusColor};
    padding-inline: calc(0.25rem);
    line-height: 1rem;
    border: 1px solid ${statusColor};
    border-radius: calc(0.125rem);
    box-shadow: rgba(76, 90, 103, 0.1) 0px 0px 0px 0.0625rem inset;
    font-weight: bold;
    text-transform: uppercase;
    font-size: max(0.75rem, 12px);
  `;
  return <StyledText>{currentValue}</StyledText>;
}

export default withConfiguration(TestExtensionsDynamicBgChange);
