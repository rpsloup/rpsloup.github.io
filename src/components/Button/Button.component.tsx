import './Button.styles.scss';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props): JSX.Element => (
  <button className="button">{children}</button>
);

export default Button;
