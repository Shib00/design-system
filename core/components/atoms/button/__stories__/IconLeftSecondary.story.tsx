import * as React from 'react';
import Button from '../Button';

export const iconLeftSecondary = () => (
  <Button
    appearance="basic"
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
    icon={'refresh'}
    iconAlign={'left'}
  >
    {'Button'}
  </Button>
);

export default {
  title: 'Atoms|Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
