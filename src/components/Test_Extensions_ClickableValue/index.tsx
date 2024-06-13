import { Text, withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';

import StyledTestExtensionsClickableValueWrapper from './styles';

// interface for props
interface TestExtensionsClickableValueProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
}

// interface for StateProps object

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function TestExtensionsClickableValue(props: TestExtensionsClickableValueProps) {
  const { getPConnect } = props;
  console.log(getPConnect().getCaseInfo().getKey());
  const caseId = getPConnect().getCaseInfo().getKey();

  const handleClick = () => {
    getPConnect()
      .getActionsApi()
      .loadView(caseId, 'TestView', {})
      .then(() => {
        console.log('view loaded');
      });
  };

  return (
    <StyledTestExtensionsClickableValueWrapper>
      <Text onClick={handleClick}>Click me</Text>
    </StyledTestExtensionsClickableValueWrapper>
  );
}

export default withConfiguration(TestExtensionsClickableValue);
