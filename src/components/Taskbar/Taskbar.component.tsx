import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';

import { toggleStartMenu, createWindow } from '../../redux/slices/ui';

import './Taskbar.styles.scss';

import type { RootState } from '../../redux/store';

const Taskbar = (): JSX.Element => {
  const { startMenuOpen } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const handleMenuItemPress = () => {
    dispatch(createWindow());
  };

  return (
    <div className="taskbar">
      <div
        className={`taskbar-menu${startMenuOpen ? ' taskbar-menu--open' : ''}`}
      >
        <div className="taskbar-menu__line">
          <span>Robin Patrik Sloup</span>
        </div>
        <ul className="taskbar-menu__items">
          <li className="taskbar-menu__item" onClick={handleMenuItemPress}>
            Test
          </li>
          <li className="taskbar-menu__item" onClick={handleMenuItemPress}>
            Test
          </li>
          <li className="taskbar-menu__item" onClick={handleMenuItemPress}>
            Test
          </li>
          <li className="taskbar-menu__item" onClick={handleMenuItemPress}>
            Test
          </li>
          <li className="taskbar-menu__item" onClick={handleMenuItemPress}>
            Test
          </li>
        </ul>
      </div>
      <Button variation="start" onClick={() => dispatch(toggleStartMenu())}>
        <img src="/img/os-logo.png" alt="OS Logo" />
        <span>Start</span>
      </Button>
    </div>
  );
};

export default Taskbar;
