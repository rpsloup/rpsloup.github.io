import Button from '../Button';

import './Taskbar.styles.scss';

const Taskbar = (): JSX.Element => (
  <div className="taskbar">
    <div className="taskbar-menu">
      <div className="taskbar-menu__line">
        <span>Robin Patrik Sloup</span>
      </div>
      <ul className="taskbar-menu__items">
        <li className="taskbar-menu__item">Test</li>
        <li className="taskbar-menu__item">Test</li>
        <li className="taskbar-menu__item">Test</li>
        <li className="taskbar-menu__item">Test</li>
        <li className="taskbar-menu__item">Test</li>
      </ul>
    </div>
    <Button variation="start">
      <img src="/img/os-logo.png" alt="OS Logo" />
      <span>Start</span>
    </Button>
  </div>
);

export default Taskbar;
