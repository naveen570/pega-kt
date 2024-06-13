/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps, configProps } from './mock';

import TestExtensionsClickableValue from './index';

const meta: Meta<typeof TestExtensionsClickableValue> = {
  title: 'TestExtensionsClickableValue',
  component: TestExtensionsClickableValue,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof TestExtensionsClickableValue>;

export const BaseTestExtensionsClickableValue: Story = args => {
  const [value, setValue] = useState(configProps.value);

  const props = {
    value,
    placeholder: configProps.placeholder,
    label: configProps.label,
    testId: configProps.testId,
    hasSuggestions: configProps.hasSuggestions,

    getPConnect: () => {
      return {
        getCaseInfo: () => {
          return {
            getID: () => {
              return 'Test';
            }
          };
        },
        getValue: (property: string) => {
          if (property.includes(stateProps.value)) {
            return 'closed';
          }
        },
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName, theValue) => {
              setValue(theValue);
            },
            triggerFieldChange: () => {
              /* nothing */
            },
            loadView: () => {
              return Promise.resolve();
            }
          };
        },
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  return (
    <>
      <TestExtensionsClickableValue {...props} {...args} />
    </>
  );
};

BaseTestExtensionsClickableValue.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  placeholder: configProps.placeholder,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  displayMode: configProps.displayMode,
  validatemessage: configProps.validatemessage
};
