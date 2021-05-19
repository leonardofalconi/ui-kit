import React from 'react';
import { Story } from '@storybook/react';
import { InterfaceButton } from '../../../src/prototypes'
import { Button } from '../../../src/components/Button';
import { theme } from '../../../src/theme'

export default {
  title: 'Components/Buttons',
  component: Button,
  parameters: { 
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    size: {
      control: {
        type: 'select'
      }
    },
    background: {
      control: {
        type: 'color'
      }
    },
    textColor: {
      control: {
        type: 'color'
      }
    },
    borderColor: {
      control: {
        type: 'color'
      }
    }
  }
};

const Template:Story<InterfaceButton> = (props:InterfaceButton):JSX.Element => <Button {...props} />;

const Light = Template.bind({});
Light.args = {
  title: 'Light Button',
  background: theme.light.colors.primary.color,
  textColor: theme.light.colors.primary.contrast,
}

const Dark = Template.bind({});
Dark.args = {
  title: 'Dark Button',
  background: theme.dark.colors.primary.color,
  textColor: theme.dark.colors.primary.contrast,
}

export {Light, Dark}