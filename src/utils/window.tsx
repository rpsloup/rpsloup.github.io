import WindowElement from '../components/Window';
import Terminal from '../components/Terminal';
import Settings from '../components/Settings';

import type { Window } from '../typings/window';

export enum WindowType {
  TERMINAL = 0,
  SETTINGS = 1,
  PROJECTS = 2,
  ABOUT_ME = 3,
  MINESWEEPER = 4,
}

export const getWindowElementByType = (window: Window): React.ReactNode => {
  switch (window.type) {
    case WindowType.TERMINAL:
      return <Terminal window={window} />;

    case WindowType.SETTINGS:
      return <Settings window={window} />;

    default:
      return <WindowElement window={window}>Window</WindowElement>;
  }
};
