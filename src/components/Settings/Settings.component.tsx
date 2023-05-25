import { useState } from 'react';
import { useDispatch } from 'react-redux';

import WindowComponent from '../Window';
import Input from '../Input';
import Separator from '../Separator';
import Button from '../Button';

import { closeWindow, setCurrentBackground } from '../../redux/slices/ui';

import './Settings.styles.scss';

import type { ChangeEvent } from 'react';

import { Window } from '../../typings/window';

interface Props {
  window: Window;
}

const Settings = ({ window }: Props): JSX.Element => {
  const [background, setBackground] = useState<string>('');
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(setCurrentBackground(background));
  };

  const handleSave = () => {
    handleApply();
    dispatch(closeWindow(window.id));
  };

  return (
    <WindowComponent window={window} title="Settings">
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
    </WindowComponent>
  );
};

export default Settings;
