import { Input, withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';

import StyledTestExtensionsDynamicBgChangeWrapper from './styles';

// interface for props
interface TestExtensionsDynamicBgChangeProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  pyStatusWork: string;
}

// interface for StateProps object
interface StateProps {
  value: string;
  hasSuggestions: boolean;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function TestExtensionsDynamicBgChange(props: TestExtensionsDynamicBgChangeProps) {
  const {
    getPConnect,
    pyStatusWork,
    placeholder,
    disabled = false,
    readOnly = false,
    required = false,
    label,
    hideLabel = false,
    testId
  } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const stateProps = pConn.getStateProps() as StateProps;
  const propName: string = stateProps.value;

  const handleOnChange = (event: any) => {
    const { value: updatedValue } = event.target;
    actions.updateFieldValue(propName, updatedValue);
  };

  return (
    <StyledTestExtensionsDynamicBgChangeWrapper>
      <Input
        type='text'
        value={pyStatusWork}
        label={label}
        labelHidden={hideLabel}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        onChange={handleOnChange}
        testId={testId}
      />
    </StyledTestExtensionsDynamicBgChangeWrapper>
  );
}

export default withConfiguration(TestExtensionsDynamicBgChange);
