import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Window from '../Window';

import { resetWindowFocus } from '../../redux/slices/ui';

import './Desktop.styles.scss';

import type { MouseEvent } from 'react';

import type { RootState } from '../../redux/store';

interface Props {
  children: React.ReactNode;
}

const Desktop = ({ children }: Props): JSX.Element => {
  const { windows } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent) => {
    const isTarget = e.target === e.currentTarget;
    if (isTarget) dispatch(resetWindowFocus());
  };

  return (
    <div className="desktop" onClick={handleClick}>
      {windows.map((window) => (
        <Window window={window} key={window.id}>
          Window
        </Window>
      ))}
      {children}
    </div>
  );
};

export default Desktop;
