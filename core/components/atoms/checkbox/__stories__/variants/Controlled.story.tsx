import * as React from 'react';
import Checkbox from '../../index';

// CSF format story
export const controlledCheckbox = () => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedChecked = event.target.checked;
    setTimeout(() => {
      setChecked(updatedChecked);
    }, 2000);
  };

  return (
      <Checkbox
        checked={checked}
        label={'Innovaccer'}
        onChange={handleParentChange}
        value={'Innovaccer'}
      />
  );
};

const customCode = `() => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event) => {
    const updatedChecked = event.target.checked;
    setTimeout(() => {
      setChecked(updatedChecked);
    }, 2000);
  };

  return (
      <Checkbox
        checked={checked}
        label={'Innovaccer'}
        onChange={handleParentChange}
        value={'Innovaccer'}
      />
  );
}`;

export default {
  title: 'Atoms|Checkbox/Variants',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
