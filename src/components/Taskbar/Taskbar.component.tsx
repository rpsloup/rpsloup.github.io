import { useSelector, useDispatch } from 'react-redux';

import Separator from '../Separator';
import Settings from '../Settings';
import Terminal from '../Terminal';
import Button from '../Button';

import { toggleStartMenu, createWindow } from '../../redux/slices/ui';

import './Taskbar.styles.scss';

import type { RootState } from '../../redux/store';

const Taskbar = (): JSX.Element => {
  const { startMenuOpen } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const handleCreateWindow = (title: string, content: JSX.Element) => {
    dispatch(
      createWindow({
        title,
        content,
      })
    );
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
          <li
            className="taskbar-menu__item"
            onClick={() => handleCreateWindow('Projects', <Terminal />)}
          >
            <img src="/img/projects-icon.png" alt="Icon" />
            <span>Projects</span>
          </li>
          <li
            className="taskbar-menu__item"
            onClick={() => handleCreateWindow('About me', <Terminal />)}
          >
            <img src="/img/about-icon.png" alt="Icon" />
            <span>About me</span>
          </li>
          <li
            className="taskbar-menu__item"
            onClick={() => handleCreateWindow('Settings', <Settings />)}
          >
            <img src="/img/example-icon.png" alt="Icon" />
            <span>Settings</span>
          </li>
          <li
            className="taskbar-menu__item"
            onClick={() => handleCreateWindow('Terminal', <Terminal />)}
          >
            <img src="/img/terminal-icon.png" alt="Icon" />
            <span>Terminal</span>
          </li>
          <li
            className="taskbar-menu__item"
            onClick={() => handleCreateWindow('Minesweeper', <Terminal />)}
          >
            <img src="/img/minesweeper-icon.png" alt="Icon" />
            <span>Minesweeper</span>
          </li>
          <Separator verticalSpacing={8} horizontalSpacing={2} />
          <li
            className="taskbar-menu__item"
            onClick={() => handleCreateWindow('Shut Down...', <Terminal />)}
          >
            <img src="/img/shutdown-icon.png" alt="Icon" />
            <span>Shut Down...</span>
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
