import { Text, withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';

// interface for props
interface TestExtensionsClickableTextProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  // pyStatusWork: string;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function TestExtensionsClickableText(props: TestExtensionsClickableTextProps) {
  const { getPConnect } = props;
  const caseId = getPConnect().getCaseInfo().getID();

  const handleClick = () => {
    getPConnect()
      .getActionsApi()
      .loadView(caseId, 'TestView', {})
      .then(() => {
        console.log('view loaded');
      });
  };

  return <Text onClick={handleClick}>Click me</Text>;
}

export default withConfiguration(TestExtensionsClickableText);
