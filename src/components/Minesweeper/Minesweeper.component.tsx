import WindowComponent from '../Window';

import type { Window } from '../../typings/window';

import './Minesweeper.styles.scss';

interface Props {
  window: Window;
}

const Minesweeper = ({ window }: Props): JSX.Element => (
  <WindowComponent window={window} title="Minesweeper">
    <div className="minesweeper-wrapper">
      <div className="game-grid">
        {Array.from({ length: 16 ** 2 }, (_, index) => (
          <button key={index} className="game-grid__box" />
        ))}
      </div>
    </div>
  </WindowComponent>
);

export default Minesweeper;
