import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Draggable from 'react-draggable';

import { closeWindow, toggleWindowActive } from '../../redux/slices/ui';

import './Window.styles.scss';

import type { DraggableEvent } from 'react-draggable';

import type { Window } from '../../typings/window';

interface Props {
  window: Window;
  children: React.ReactNode;
}

const Window = ({ window, children }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const nodeRef = useRef<HTMLDivElement>(null);

  const clickHandler = () => {
    dispatch(toggleWindowActive(window.id));
  };

  const dragHandler = (e: DraggableEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    nodeRef &&
      nodeRef.current &&
      nodeRef.current.addEventListener('mousedown', clickHandler);
    return () => {
      nodeRef &&
        nodeRef.current &&
        nodeRef.current.removeEventListener('mousedown', clickHandler);
    };
  }, []);

  return (
    <Draggable nodeRef={nodeRef} onDrag={dragHandler}>
      <div
        className={`window${window.active ? ' window--active' : ''}`}
        ref={nodeRef}
        onClick={() => dispatch(toggleWindowActive(window.id))}
        style={{
          zIndex: window.elevation || 0,
        }}
      >
        <div className="window__titlebar">
          <span>{window.title || 'Window'}</span>
          <div className="window__titlebar__buttons">
            <button onClick={() => dispatch(closeWindow(window.id))}>
              <img src="/img/cross.png" alt="Cross" />
            </button>
          </div>
        </div>
        <div className="window__content">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
