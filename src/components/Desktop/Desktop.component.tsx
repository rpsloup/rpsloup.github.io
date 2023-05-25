import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { resetWindowFocus } from '../../redux/slices/ui';

import './Desktop.styles.scss';

import type { MouseEvent } from 'react';

import type { RootState } from '../../redux/store';
import { getWindowElementByType } from '../../utils/window';

interface Props {
  children: React.ReactNode;
}

const Desktop = ({ children }: Props): JSX.Element => {
  const { windows, currentBackground } = useSelector(
    (state: RootState) => state.ui
  );
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent) => {
    const isTarget = e.target === e.currentTarget;
    if (isTarget) dispatch(resetWindowFocus());
  };

  return (
    <div
      className="desktop"
      onClick={handleClick}
      style={{
        backgroundImage: currentBackground
          ? `url('${currentBackground}')`
          : undefined,
      }}
    >
      {windows.map((window) => (
        <Fragment key={window.id}>{getWindowElementByType(window)}</Fragment>
      ))}
      {children}
    </div>
  );
};

export default Desktop;
