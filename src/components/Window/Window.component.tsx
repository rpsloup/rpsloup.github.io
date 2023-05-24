import './Window.styles.scss';

interface Props {
  children: React.ReactNode;
}

const Window = ({ children }: Props): JSX.Element => (
  <div className="window">{children}</div>
);

export default Window;
