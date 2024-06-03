/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps, configProps } from './mock';

import TestExtensionsTextBgColor from './index';

const meta: Meta<typeof TestExtensionsTextBgColor> = {
  title: 'TestExtensionsTextBgColor',
  component: TestExtensionsTextBgColor,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof TestExtensionsTextBgColor>;

export const BaseTestExtensionsTextBgColor: Story = args => {
  const [value, setValue] = useState(configProps.value);

  const props = {
    value,
    placeholder: configProps.placeholder,
    label: configProps.label,
    testId: configProps.testId,
    hasSuggestions: configProps.hasSuggestions,

    getPConnect: () => {
      return {
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
      <TestExtensionsTextBgColor {...props} {...args} />
    </>
  );
};

BaseTestExtensionsTextBgColor.args = {
  value: configProps.value,
  statusType: configProps.statusType,
  colorsAvailable: configProps.colorsAvailable,
  statusesAvailable: configProps.statusesAvailable
};
