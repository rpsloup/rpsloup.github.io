import { useSelector } from 'react-redux';

import Window from '../Window';

import './Desktop.styles.scss';

import type { RootState } from '../../redux/store';

interface Props {
  children: React.ReactNode;
}

const Desktop = ({ children }: Props): JSX.Element => {
  const { windows } = useSelector((state: RootState) => state.ui);

  return (
    <div className="desktop">
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
