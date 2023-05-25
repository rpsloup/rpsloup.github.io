import WindowComponent from '../Window';

import type { Window } from '../../typings/window';

import './Terminal.styles.scss';

interface Props {
  window: Window;
}

const Terminal = ({ window }: Props): JSX.Element => (
  <WindowComponent window={window} title="Terminal">
    <div className="terminal-wrapper"></div>
  </WindowComponent>
);

export default Terminal;
