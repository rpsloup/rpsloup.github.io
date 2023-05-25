import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../Input';
import Separator from '../Separator';
import Button from '../Button';

import { setCurrentBackground } from '../../redux/slices/ui';

import './Settings.styles.scss';

import type { ChangeEvent } from 'react';

const Settings = (): JSX.Element => {
  const [background, setBackground] = useState<string>('');
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(setCurrentBackground(background));
  };

  const handleSave = () => {
    handleApply();
  };

  return (
    <div className="settings-wrapper">
      <p>Background URL:</p>
      <Input
        value={background}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setBackground(e.target.value)
        }
      />
      <Separator verticalSpacing={12} horizontalSpacing={0} />
      <div className="settings-wrapper__buttons">
        <Button onClick={handleApply}>Apply</Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default Settings;
